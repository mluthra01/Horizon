json.extract! @product, :id, :name, :description, :category, :price
# json.photoUrl @product.photo.url
json.photoUrl @product.photo.attached? ? @product.photo.url : nil