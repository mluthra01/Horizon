# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  body       :text             not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  headline   :string           not null
#
class Review < ApplicationRecord

    validates :body, presence: true, length: { in: 1..10000 }
    validates :headline, presence: true, length: { maximum: 200}
    validates :rating, numericality:
            {
                only_integer: true,
                greater_than_or_equal_to: 1, less_than_or_equal_to: 5, 
                message: "rating must be between 1 and 5"
            }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
