# frozen_string_literal: true

module Types
  class ProductType < Types::BaseObject
    description "A product in the store"
    field :id, ID, null: false
    field :name, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
