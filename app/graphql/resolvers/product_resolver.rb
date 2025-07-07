module Resolvers
  class ProductResolver < BaseResolver
    type Types::ProductType, null: false
    argument :id, ID

    def resolve(id:)
      ::Product.find(id)
    end
  end
end
