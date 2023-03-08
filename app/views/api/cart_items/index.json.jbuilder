json.cartItems do
        @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :user_id, :product_id, :quantity
        end
    end
    # if @cart_items.empty?
    #     render json: cartItems: []
end

cart_items = @cart_items.includes(:product )
json.products do 
    cart_items.each do |cart_item|
        json.set! cart_item.product.id do
            json.extract! cart_item.product, :id, :name, :description, :category_id, :price
            json.photoUrl cart_item.product.photo.attached? ? cart_item.product.photo.url : nil
            json.cartItemId cart_item.id 
            json.quantity cart_item.quantity
        end
    end
end
