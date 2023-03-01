class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.references :category, null: false, foreign_key: true
      t.float :price, null: false
      t.timestamps
    end
  end
end


