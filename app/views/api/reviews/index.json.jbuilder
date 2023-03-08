@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :headline, :body, :reviewer_id, :product_id, :rating, :created_at
        
    end
end