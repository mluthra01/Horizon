# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  category_id :bigint           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :description, :price, presence: true
    
    has_one_attached :photo
    
    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

    has_many :cart_items,
        foreign_key: :user_id,
        class_name: :CartItem

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review,
        dependent: :destroy

    def avg_rating
        reviews = self.reviews
        total = reviews.map{|review| review.rating }
            total.sum / (reviews.length * 1.0)
    end

end
