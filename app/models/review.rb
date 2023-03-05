# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :bigint           not null
#  product_id  :bigint           not null
#  body        :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
end
