@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :category_id, :price
        json.photoUrl product.photo.attached? ? product.photo.url : nil
        json.avg_rating product.avg_rating

    end
end

