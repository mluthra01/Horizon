@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :headline, :body, :user_id, :product_id, :rating, :created_at
        
    end
end