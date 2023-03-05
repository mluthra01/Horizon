
json.cart_item do
    json.id @cart_item.id
    json.user_id @cart_item.user_id
    json.quantity @cart_item.quantity
    json.product_id @cart_item.product_id
end