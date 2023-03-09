@cart_items.each do |cart_item|
    # json.cart_item do
        json.quantity cart_item.quantity
        json.productId cart_item.product_id
    # end
end