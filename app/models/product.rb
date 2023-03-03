class Product < ApplicationRecord
    validates :name, :description, :price, presence: true
    
    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

end
