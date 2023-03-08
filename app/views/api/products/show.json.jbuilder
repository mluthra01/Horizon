json.extract! @product, :id, :name, :description, :category, :price
json.photoUrl @product.photo.attached? ? @product.photo.url : nil

json.reviews do 
    @product.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :body, :rating, :product_id, :reviewer_id, :created_at
        end
    end 
end