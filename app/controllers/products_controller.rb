class ProductsController < ApplicationController
  before_action :set_data, only: %i[index search]
  before_action :validate_params, only: [:search]
  def index
  end

  def search
    # sleep(2) # Simulate a delay for demonstration purposes
    @products.select! { |product| product[:brand] == @selected_brand } if @selected_brand.present?
    render json: { products: @products }
  end

  private

  def set_data
    @products = []
    @brands = %w[Toyota Honda Ford Chevrolet Nissan BMW Mercedes-Benz Volkswagen Audi
                 Hyundai]
    @selected_brand = params[:brand]
    # cache the products list
    # Rails.cache.delete('products') # Uncomment to clear cache for testing
    @products = Rails.cache.fetch('products', expires_in: 1.hours) do
      cached_products = []
      20.times do |id|
        cached_products << {
          id: id + 1,
          name: Faker::Vehicle.model,
          price: Faker::Commerce.price(range: 1000..50_000, as_string: true),
          description: Faker::Vehicle.standard_specs.join(', '),
          image_url: "https://picsum.photos/200/300?random=#{rand(1..100)}",
          brand: @brands.sample
        }
      end
      cached_products
    end
  end

  def validate_params
    return false if params[:brand].blank?

    if params[:brand].present? && !@brands.include?(params[:brand])
      render json: { error: 'Invalid brand parameter' }, status: :unprocessable_entity
      return false
    end
    @selected_brand = params[:brand]
    true
  end
end
