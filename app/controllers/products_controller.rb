class ProductsController < ApplicationController
  def index
    @products = []
    @brands = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai"]
    20.times do |i|
      @products << {
        id: i + 1,
        name: Faker::Vehicle.make_and_model,
        price: Faker::Commerce.price(range: 1000..50000, as_string: true),
        description: Faker::Vehicle.standard_specs.join(", "),
        image_url: "https://picsum.photos/200/300?random=#{rand(1..100)}",
        brand: @brands.sample
      }
    end

  end

  def search
    @products = []
    @brands = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai"]
    @selected_brand = params[:brand]
    20.times do
      @products << {
        name: Faker::Vehicle.make_and_model,
        price: Faker::Commerce.price(range: 1000..50000, as_string: true),
        description: Faker::Vehicle.standard_specs.join(", "),
        image_url: "https://picsum.photos/200/300?random=#{rand(1..100)}",
        brand: @brands.sample
      }
    end
    if @selected_brand.present?
      @products.select! { |product| product[:brand] == @selected_brand }
    end
    render json: { products: @products}
  end
end
