class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.date :birth
      t.date :death

      t.timestamps
    end
  end
end
