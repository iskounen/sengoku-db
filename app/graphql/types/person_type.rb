# frozen_string_literal: true

module Types
  # Person type
  class PersonType < Types::BaseObject
    description 'A person'
    field :id, ID, null: false
    field :name, String, null: false
    field :birth, GraphQL::Types::ISO8601Date, null: false
    field :death, GraphQL::Types::ISO8601Date, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
