# frozen_string_literal: true

module Types
  # The mutation root of this schema
  class MutationType < Types::BaseObject
    field :create_person, mutation: Mutations::CreatePerson
  end
end
