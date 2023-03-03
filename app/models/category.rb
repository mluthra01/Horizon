class Category < ApplicationRecord
    validates :name, presence: true

    has_many :products,
        class_name: :Product,
        foreign_key: :category_id,
        dependent: :destroy
end
