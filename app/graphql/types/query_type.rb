# frozen_string_literal: true

module Types
  # The query root of this schema
  class QueryType < Types::BaseObject
    field :people, [Types::PersonType], null: false do
      description 'Return all people'
    end

    def people
      Person.all
    end
  end
end
