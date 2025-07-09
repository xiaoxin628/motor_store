class ProductsController < ApplicationController
  before_action :set_data, only: [:index, :search]
  before_action :validate_params , only: [:search]
  def index
  end

  def search

    if @selected_brand.present?
      @products.select! { |product| product[:brand] == @selected_brand }
    end
    render json: { products: @products}
  end

  private 
    def set_data
      @products = []
      @brands = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai"]
      @selected_brand = params[:brand]
      # cache the products list
      
      @products = Rails.cache.fetch("products", expires_in: 1.hours) do
        20.times do
          cached_products << {
            name: Faker::Vehicle.make_and_model,
            price: Faker::Commerce.price(range: 1000..50000, as_string: true),
            description: Faker::Vehicle.standard_specs.join(", "),
            image_url: "https://picsum.photos/200/300?random=#{rand(1..100)}",
            brand: @brands.sample
          }
        end
        logger.info('cached product')
        cached_products
      end
    end
    
    def validate_params
      return false if params[:brand].blank?

      if params[:brand].present? && !@brands.include?(params[:brand])
        render json: { error: "Invalid brand parameter" }, status: :unprocessable_entity
        return false
      end
      @selected_brand = params[:brand]
      return true
    end
end
