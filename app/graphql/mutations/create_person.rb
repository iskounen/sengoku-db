# frozen_string_literal: true

module Mutations
  # Mutation to create a new person
  class CreatePerson < BaseMutation
    field :person, Types::PersonType, null: false

    argument :name, String, required: true
    argument :birth, GraphQL::Types::ISO8601Date, required: true
    argument :death, GraphQL::Types::ISO8601Date, required: true

    def resolve(name:, birth:, death:)
      { person: Person.create(name: name, birth: birth, death: death) }
    end
  end
end
