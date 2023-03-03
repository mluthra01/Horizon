# app/views/categories/show.json.jbuilder

json.category do
    json.name @category.name
    json.products @category.products do |product|
    json.partial! 'api/products/product', product: product
    end
end
