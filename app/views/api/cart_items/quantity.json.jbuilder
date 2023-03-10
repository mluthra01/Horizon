
if @cart_items == nil
    return ""
else
json.quantity @cart_items.inject{|acc, el| acc.quantity + el.quantity } 
end
