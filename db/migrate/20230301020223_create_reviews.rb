class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :reviewer, null: false, foreign_key: { to_table: :users}
      t.references :product, null: false, foreign_key: true
      t.text :body, null: false
      t.integer :rating, null: false
      t.timestamps
    end
  end
end
