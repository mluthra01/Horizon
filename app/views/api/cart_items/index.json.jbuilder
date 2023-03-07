json.cartItems do
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :user_id, :product_id, :quantity
        end
    end
end

cart_items = @cart_items.includes(:product )
json.products do 
    cart_items.each do |cart_item|
        json.set! cart_item.product.id do
            json.extract! cart_item.product, :id, :name, :description, :category_id, :price
            json.photoUrl cart_item.product.photo.attached? ? cart_item.product.photo.url : nil
        end
    end
end

