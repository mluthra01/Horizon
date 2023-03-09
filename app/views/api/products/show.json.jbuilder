json.product do
json.extract! @product, :id, :name, :description, :category, :price
json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end

json.reviews do 
    if @product.reviews.empty?
        json.array! []
    else
    @product.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :body, :rating, :product_id, :user_id, :created_at
        end
    end 
end
end
