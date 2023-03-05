# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require 'faker'

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all
    Category.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('categories')

    puts "Creating users..."
    # Create one user with an easy to remember name, email, and password:
    User.create!(
    name: 'Demo singh', 
    email: 'demo@user.io', 
    password: 'password'
    )

    User.create!(
    email: "johndoe@example.com",
    name: "John Doe",
    password: "password"
)

User.create!(
    email: "janedoe@example.com",
    name: "Jane Doe",
    password: "password"
)

User.create!(
    email: "bobsmith@example.com",
    name: "Bob Smith",
    password: "password"
)

User.create!(
    email: "sarahlee@example.com",
    name: "Sarah Lee",
    password: "password"
)

User.create!(
    email: "michaelchen@example.com",
    name: "Michael Chen",
    password: "password"
)

User.create!(
    email: "kathynguyen@example.com",
    name: "Kathy Nguyen",
    password: "password"
)

User.create!(
    email: "davidkim@example.com",
    name: "David Kim",
    password: "password"
)

User.create!(
    email: "maryjones@example.com",
    name: "Mary Jones",
    password: "password"
)

User.create!(
    email: "adamli@example.com",
    name: "Adam Li",
    password: "password"
)

User.create!(
    email: "emilytan@example.com",
    name: "Emily Tan",
    password: "password"
)

User.create!(
    email: "peterzhang@example.com",
    name: "Peter Zhang",
    password: "password"
)

User.create!(
    email: "monicalee@example.com",
    name: "Monica Lee",
    password: "password"
)

User.create!(
    email: "samueljackson@example.com",
    name: "Samuel Jackson",
    password: "password"
)

User.create!(
    email: "susanlee@example.com",
    name: "Susan Lee",
    password: "password"
)

User.create!(
    email: "kevinchen@example.com",
    name: "Kevin Chen",
    password: "password"
)


    puts "Done!"
    # end

category_1 = Category.create!(name: "Electronics")
category_2 = Category.create!(name: "Home & Kitchen")
category_3 = Category.create!(name: "Clothing & Accessories")
category_4 = Category.create!(name: "Sports & Outdoors")



# ELECTRONICS

Product.create!(
    name: "Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID",
    description: "All-Day Battery Life  Go longer than ever with up to 18 hours of battery life.
Powerful Performance Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
Superfast Memory 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
Stunning Display  With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.
Why Mac  Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before.",
    category_id: category_1.id,
    price: 999.99,
)

Product.create!(
    name: "Samsung Galaxy S21",
    description: "A high-end smartphone from Samsung",
    category_id: category_1.id,
    price: 799.99
)

Product.create(name: "iPhone 14", 
    description: "The most advanced iPhone yet", 
    category_id: category_1.id, 
    price: 899.99
)

Product.create!(
    name: "Bose QuietComfort 35 II",
    description: "Wireless noise-cancelling headphones from Bose",
    category_id: category_1.id,
    price: 299.99
)

Product.create!(
    name: "Philips Hue Starter Kit",
    description: "Smart lighting system from Philips",
    category_id: category_1.id,
    price: 129.99
)

Product.create!(name: "Sony PlayStation 5",
    description: "The latest gaming console from Sony",
    category_id: category_1.id,
    price: 499.99
)


# # HOME AND KITCHEN

Product.create!(
    name: "Instant Pot Duo",
    description: "7-in-1 pressure cooker from Instant Pot",
    category_id: category_2.id, 
    price: 99.99
)
Product.create!(name: "Dyson V11", 
    description: "Cordless vacuum cleaner from Dyson", 
    category_id: category_2.id, 
    price: 599.99
)
Product.create!(
    name: "Le Creuset Dutch Oven", 
    description: "Premium cast iron Dutch oven from Le Creuset", 
    category_id: category_2.id, 
    price: 369.99
)
Product.create!(
    name: "Ninja Foodi Grill", 
    description: "Indoor grill from Ninja", 
    category_id: category_2.id, 
    price: 199.99
)
Product.create!(
    name: "Cuisinart Coffee Maker", 
    description: "12-cup coffee maker from Cuisinart", 
    category_id: category_2.id, 
    price: 89.99
)
Product.create(
    name: "iRobot Roomba 675 Robot Vacuum",
    description: "The Roomba 675 is a robot vacuum that uses a 3-stage cleaning system to loosen, lift, and suction dirt, dust, and hair from carpets and hard floors. It has dual multi-surface brushes that work together to grab dust, dirt, and large debris. It is also compatible with Alexa and Google Assistant.",
    category_id: category_2.id,
    price: 249.99
)

# # CLOTHING AND ACCESSORIES 

Product.create!(
    name: "Adidas Ultraboost", 
    description: "Comfortable running shoes from Adidas", 
    category_id: category_3.id, 
    price: 179.99
)
Product.create!(
    name: "Levi's 501 Original Fit Jeans", 
    description: "Iconic jeans from Levi's", 
    category_id: category_3.id, 
    price: 99.99
)
Product.create!(
    name: "Ray-Ban Classic Aviator Sunglasses", 
    description: "Timeless sunglasses from Ray-Ban", 
    category_id: category_3.id, 
    price: 154.99
)
Product.create!(
    name: "Herschel Supply Co. Backpack", 
    description: "Stylish backpack from Herschel Supply Co.", 
    category_id: category_3.id, 
    price: 69.99
)
Product.create!(
    name: "Lululemon Align Leggings", 
    description: "High-waisted leggings from Lululemon", 
    category_id: category_3.id, 
    price: 99.99
)

    # SPORTS AND OUTDOORS

Product.create!(
    name: "Yeti Tundra 45 Cooler", 
    description: "Durable and insulated cooler from Yeti", 
    category_id: category_4.id, 
    price: 299.99
)
Product.create!(name: "Patagonia Better Sweater", 
    description: "Warm and comfortable fleece from Patagonia", 
    category_id: category_4.id, 
    price: 139.99
)

Product.create!(name: "Nike Air Max", 
    description: "Comfortable and stylish shoes for running and everyday wear", 
    category_id: category_4.id, 
    price: 109.99
)


CartItem.create!(
    user_id: 1,
    product_id: 1,
    quantity: 1
)


# # # # Categories
# # # Category.create(name: "Electronics")
# # # Category.create(name: "Clothing")
# # # Category.create(name: "Home and Kitchen")
# # # Category.create(name: "Beauty")
# # # Category.create(name: "Sports")

# # # # Products
# # # macbook_air = Product.create(name: "MacBook Air", description: "The thinnest and lightest MacBook yet", category_id: 1, price: 999.99)
# # # iphone_13 = Product.create(name: "iPhone 13", description: "The most advanced iPhone yet", category_id: 1, price: 799.99)
# # # sony_tv = Product.create(name: "Sony 65-inch 4K Ultra HD TV", description: "Experience stunning picture quality with this 4K TV", category_id: 1, price: 1299.99)
# # # nike_air_max = Product.create(name: "Nike Air Max", description: "Comfortable and stylish shoes for running and everyday wear", category_id: 5, price: 109.99)
# # # adidas_ultraboost = Product.create(name: "Adidas Ultraboost", description: "High-performance running shoes with Boost cushioning", category_id: 5, price: 149.99)
# # # levis_jeans = Product.create(name: "Levi's 501 Original Fit Jeans", description: "Classic straight-leg jeans that never go out of style", category_id: 2, price: 79.99)
# # # huxley_toner = Product.create(name: "Huxley Toner Extract It", description: "A gentle and hydrating toner for all skin types", category_id: 4, price: 28.99)
# # # nespresso_machine = Product.create(name: "Nespresso Vertuo Coffee and Espresso Machine", description: "Make delicious coffee and espresso with this easy-to-use machine", category_id: 3, price: 199.99)
# # # instant_pot = Product.create(name: "Instant Pot Duo Plus", description: "A versatile and easy-to-use pressure cooker that can also sauté, steam, and more", category_id: 3, price: 129.99)
# # # dyson_vacuum = Product.create(name: "Dyson Cyclone V10 Absolute Cordless Vacuum", description: "Efficiently clean your home with this powerful cordless vacuum", category_id: 3, price: 499.99)

# # # Reviews
# # # Review.create(reviewer_id: 1, product_id: 1, body: "I absolutely love my MacBook Air! It's lightweight, easy to use, and has great battery life. Highly recommend!", rating: 5)
# # # Review.create(reviewer_id: 2, product_id: 1, body: "This laptop is the perfect combination of performance and portability. It's great for travel and everyday use. Would definitely buy again.", rating: 4)
# # # Review.create(reviewer_id: 3, product_id: 1, body: "I've been using this laptop for work and it's been a lifesaver. It's fast, reliable, and the keyboard is great to type on. Highly recommend for professionals.", rating: 5)
# # # Review.create(reviewer_id: 4, product_id: 1, body: "I was hesitant to switch to a MacBook, but this laptop exceeded my expectations. It's easy to use and the display is beautiful. The only downside is the limited storage.", rating: 4)
# # # Review.create(reviewer_id: 5, product_id: 1, body: "This laptop is overpriced for what it offers. The display and keyboard are great, but the performance is lacking. Would not
