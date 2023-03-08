# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require 'faker'

# ApplicationRecord.transaction do 
    require "open-uri"
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
category_3 = Category.create!(name: "Beauty")
category_4 = Category.create!(name: "Sports & Outdoors")

PRODUCTS = [
    {
    name: "Horizon Basics Aluminum USB 3.1 Type-C Docking with HDMI, VGA, Ethernet, 2 USB-A, SD/TF Card Reader, Type-C data port (5Gbps), and Type-C charging port (PD 100W) - Black",
    description: "9-in-1 multi-port Type-C docking station includes HDMI, VGA, USB 3.0 A x2, Ethernet, TF card slot, SD card slot, and Type-C female port x2: one supports PD 3.0 charging (100 watts) and the other supports 5Gbps data transmission.
    Ultra HD 4K output; the HDMI/VGA port can directly stream 4K UHD or full HD 1080P video to HDTV, monitors, or projectors; HDMI and VGA cannot display at the same time (HDMI comes before VGA).
    2 USB-A ports and Type C data port for fast data transfer up to 5Gbps, and they share max 10-watt (5V/2A) downstream charging.
    1,000 Mbps RJ45 Ethernet port for fast, stable wired network connection; TF/SD card slots can work simultaneously; aluminum housing in a compact size with a Black finish.
    Compatible with MacBook Pro 2018/2017/2016, iPad Pro 2018, Mac mini 2018, MacBook Air, iMac 2017, Samsung Note9, HUAWEI MateBook X, Dell XPS 13, ThinkPad, Chromebook, and more.",
    category_id: category_1.id,
    price: 71.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/horizon+basics+ausb+ethermet.jpg",
    fileName: "electronics/horizon_basics_usb_ethernet.jpg"
    },
    
    {
    name: "Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID",
    description: "All-Day Battery Life  Go longer than ever with up to 18 hours of battery life.
    Powerful Performance Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
    Superfast Memory 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
    Stunning Display  With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.
    Why Mac  Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before.",
    category_id: category_1.id,
    price: 999.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/macbook.jpg",
    fileName: "electronics/macbook.jpg"
    },
    
    {
    name: "SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, White",
    description: "SMOOTH SCROLLING: The 120Hz display delivers a super smooth scroll, with optimized refresh rate, and a fast touch response gives seamless visuals in both work and play.Form_factor : Smartphone
    REAL DISPLAY VISION: The high quality display with Dynamic AMOLED 2X delivers vibrant color and brightness, even in bright sunlight
    PRO-GRADE CAMERA: The powerful pro grade camera delivers high quality photos and videos, with a Rear Camera that boasts 12MP Ultra Wide, Wide-angle cameras and an 8MP Telephoto Camera; It also features a Front Camera that includes a 32MP Selfie Camera
    30X SPACE ZOOM: 30x SpaceZoom combines a 3x Hybrid Optic Zoom and 30x digital zoom for high resolution close ups, while the EngageZoom Lock reduces shakiness the further your zoom in
    SUPERIOR PERFORMANCE: The power-efficient processor chip offers reliability and performance that boosts every experience, from graphic-heavy gaming to multitasking.
    ALL DAY INTELLIGENT POWER: The 4500mAh intelligent battery outlasts the day, even on 5G, while Super Fast Charging can charge 50% in 30 minutes.",
    category_id: category_1.id,
    price: 799.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/samsungs21.jpg",
    fileName: "electronics/samsungs21.jpg"
    },
    
    {
    name: "iPhone 13 Pro, 128GB, Sierra Blue", 
    description: "Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity.
    Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm’s length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.
    Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card.
    Backed by the same one-year satisfaction guarantee as brand new Apple products.", 
    category_id: category_1.id, 
    price: 899.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/iphone13.webp",
    fileName: "electronics/iphone13.webp"
    },
    
    {
    name: "Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black",
    description: "Three levels of world-class noise cancellation for better listening experience in any environment
    Alexa-enabled for voice access to music, information, and more
    Noise-rejecting dual-microphone system for clear sound and voice pick-up
    Balanced audio performance at any volume
    Hassle-free Bluetooth pairing, personalized settings, access to future updates, and more through the Bose connect app. USB cable: 12 inch
    Bose AR enabled — an innovative, audio-only version of augmented reality
    For iPhone, iPad, and Android users, be sure your products firmware is up to date through the Bose connect app. Then you can access a showcase of Bose AR enhanced apps with Links to download them.",
    category_id: category_1.id,
    price: 299.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/bose.jpg",
    fileName: "electronics/bose.jpg"
        
    },
    
    {
    name: "Philips - Hue Play Starter Kit - Black",
    description: "Compact design with a full light experience; enhances any entertainment setup.
    Personalize your playtime; use the Play light bars to sync with movies, music and video games.
    Set the light bars upright with included stands; mount to the TV for a backlight; or lay them flat.
    Mix sight and sound; enjoy a light and music integration with Hue and your Spotify music.
    Get the full Hue experience with the Bridge; enjoy automations; out-of-home-control; and more.",
    category_id: category_1.id,
    price: 149.97,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/philips.jpg",
    fileName: "electronics/philips.jpg"
        
    },
    
    {
    name: "PlayStation 5 Console CFI-1215A01X",
    description: "Stunning Games - Marvel at incredible graphics and experience new PS5 features.
    Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.
    Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.",
    category_id: category_1.id,
    price: 499.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/electronics/playstation.jpg",
    fileName: "electronics/playstation.jpg"
        
    },
    
    {
    name: "Horizon Basics Glass Locking Lids Food Storage Containers, 20-Piece Set",
    description: "20-piece set includes 10 borosilicate glass bases and 10 BPA-free plastic lids.
    Rectangular containers include: 1. 6 cup (2), 3. 6 cup (2), 7. 6 cup (1).
    Round containers include: 3. 0 cup (1) 1. 28Cup (2).
    Square containers include: 1. 8 cup (1), 4. 0 cup (1).
    Locking lid with silicone ring prevents unwanted spills.
    Glass base is non-porous making it easy to clean, resistant to corrosion, and does not absorb stains or odors.
    Glass base is oven save up to 752 F, as well as refrigerator, freezer, microwave, and dishwasher safe (make sure to not subject the glass to extreme temperature changes).
    Plastic lid is microwave safe (make sure lid allows for venting), freezer, and top rack dishwasher safe.",
    category_id: category_2.id,
    price: 50.74,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/glass+locking+lids.jpg",
    fileName: "home_and_kitchen/glass_locking_lids.jpg"
    },
    
    
    {
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker, Warmer & Sterilizer, Includes App With Over 800 Recipes, Stainless Steel, 6 Quart",
    description: "7-IN-1 FUNCTIONALITY: Pressure cook, slow cook, rice cooker, yogurt maker, steamer, sauté pan and food warmer.
    QUICK ONE-TOUCH COOKING: 13 customizable Smart Programs for pressure cooking ribs, soups, beans, rice, poultry, yogurt, desserts and more.
    COOK FAST OR SLOW: Pressure cook delicious one-pot meals up to 70% faster than traditional cooking methods or slow cook your favorite traditional recipes – just like grandma used to make.
    QUICK AND EASY CLEAN UP: Finger-print resistant, stainless-steel sides and dishwasher-safe lid, inner pot, and accessories.
    SAFETY FEATURES: Includes over 10 safety features, plus overheat protection and safe-locking lid
    GREAT FOR GROWING FAMILIES: Cook for up to 6 people – perfect for growing families, or meal prepping and batch cooking for singles.
    VERSATILE INNER COOKING POT: We use food-grade stainless-steel, a tri-ply bottom for more even cooking and perfect for sautéing
    DISCOVER AMAZING RECIPES: Download our free Instant Pot app, so you can create quick new favorites and prepare delicious meals, available iOS and Android.",
    category_id: category_2.id, 
    price: 99.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/instant+pot.jpg",
    fileName: "home and kitchen/instant pot.jpg"
    },
    
    
    {
    name: "Dyson V11 Torque Drive Cordless Vacuum Cleaner, Blue",
    description: "Dyson's most intelligent, powerful cordless vacuum. Twice the suction of any cordless vacuum.
    Dyson technology helps create a cleaner, healthier home - Our vacuums and purifiers are scientifically proven to capture particles as small as allergens and bacteria.
    Engineered for whole-home, deep cleaning. Suction power, run time and tools designed to deep clean your whole home.
    Intelligently optimizes suction and run time across all floor types. The right balance of power and run time when you need it.
    Up to 60 minutes of run time. Engineered for larger homes with pets. Actual run time will vary based on power mode, floor type and/or attachments used.
    High torque cleaner head. Automatically adapts suction and power to deep clean different floor types without changing cleaner heads.
    Advanced whole-machine filtration. Advanced whole-machine filtration traps 99.99% of particles, dust and allergens as small as", 
    category_id: category_2.id, 
    price: 599.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/dyson+v11.jpg",
    fileName: "home and kitchen/dyson v11.jpg"
    },
    
    
    {
    name: "Le Creuset Enameled Cast Iron Signature Round Dutch Oven, 7.25 qt., Cerise", 
    description: "Enameled cast iron delivers superior heat distribution and retention
    Ready to use, requires no seasoning.
    Easy-to-clean and durable enamel resists dulling, staining, chipping and cracking.
    Light colored smooth interior enamel allows easy monitoring of cooking progress.
    Tight-fitting lids are specially designed to circulate steam and return moisture back to the food.
    Ergonomic knobs and handles are designed for easy lifting.
    Stainless steel knob is safe at any oven temperature.", 
    category_id: category_2.id, 
    price: 369.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/dutch+oven.jpg",
    fileName: "home and kitchen/dutch oven.jpg"
    },
    
    
    {
    name: "Ninja FG551 Foodi Smart XL 6-in-1 Indoor Grill with Air Fry, Roast, Bake, Broil & Dehydrate, Smart Thermometer, Black/Silver", 
    description: "NINJA FOODI SMART XL GRILL: The Smart XL grill that sears, sizzles, and crisps. Indoor countertop Grill and Air Fryer with the Smart Cook System & Thermometer.
    CYCLONIC GRILLING TECHNOLOGY: Uses 500°F cyclonic air to perfectly cook or char grill your food to your desired doneness on the grill grate for delicious, char-grilled marks and flavors.
    SMART COOK SYSTEM plus THERMOMETER: The Foodi Smart Thermometer enable you to achieve the perfect doneness from rare to well with 4 smart protein settings & 9 customizable doneness levels. Do it all at a touch of a button with no more guesswork & no more over or under cooking.", 
    category_id: category_2.id, 
    price: 199.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/ninja.jpg",
    fileName: "home and kitchen/ninja.jpg"
    },
    
    
    {
    name: "Coffee Maker by Cuisinart, 14-Cup Glass Carafe, Fully Automatic for Brew Strength Control & 1-4 Cup Setting, Stainless Steel, DCC-3200P1", 
    description: "ENJOY HOTTER COFFEE: Expert coffee-making technology will allow you to ensure your coffee temperature is perfect without sacrificing flavor or quality.
    BREW STRENGTH CONTROL: Select regular or bold coffee flavor to perfectly match your coffee taste preference.
    FULLY AUTOMATIC COFFEE BREWER: 24-hour programmability with 1–4 cup settings, auto-off functionality—0-4 hours—and optional ready alert tone.
    14-CUP GLASS CARAFE: Includes decorative stainless-steel handle with matching stainless-steel body to perfectly pair with your kitchen appliances.", 
    category_id: category_2.id, 
    price: 89.95,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/coffee+maker.jpg",
    fileName: "home and kitchen/coffee maker.jpg"
    },
    
    {
    name: "iRobot Roomba 692 Robot Vacuum-Wi-Fi Connectivity, Personalized Cleaning Recommendations, Works with Alexa, Good for Pet Hair, Carpets, Hard Floors, Self-Charging, Charcoal Grey",
    description: "CLEAN SMARTER - Sleek, premium design complements your home décor; The Roomba 692 is a great way to begin cleaning your home smarter. Just schedule it to clean up daily dirt, dust, and debris with the iRobot HOME app or your voice assistant..Runtime : 90 minutes
    LOOSENS, LIFTS, AND SUCTIONS - The 3 Stage Cleaning system and Dual Multi-Surface brushes grab dirt from carpets and hard floors, an Edge-Sweeping brush takes care of corners and edges.
    LEARNS YOUR LIFE LISTENS TO YOUR VOICE - Learns your cleaning habits to offer up personalized schedules, while Google Assistant and Alexa allow you to start cleaning with just the sound of your voice.
    ADAPTIVE NAVIGATION - A full suite of advanced sensors allow Roomba to navigate under and around furniture, and along edges. Cliff Detect keeps it from falling down stairs.
    ",
    category_id: category_2.id,
    price: 239.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/home+and+kitchen/robot+vacuum.jpg",
    fileName: "home and kitchen/robot vacuum.jpg"
    },
    
    {
    name: "Horizon Basics Wall-Mounted Vanity Mirror - 1X/5X Magnification, Chrome",
        description: "360 degree rotating double-sided mirror for mounting on wall in bathroom or near a vanity counter.
        1x and 5x magnification mirrors ideal for up-close grooming, makeup application, skincare, and more.
        Durable, substantial iron-coated construction.
        Adjustable, extendable design that allows you to find the perfect vantage point for your beauty routine.
        Crystal clear reflection with mirror diameter of 6.69 inches.
        Chrome finish; clean with a dry cloth, do not use solvent-based cleaners.
            ",
            category_id: category_3.id,
            price: 22.94,
            file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/beauty/amazon-basics-mirror.jpg",
            fileName: "beauty/amazon-basics-mirror.jpg"    
        },
        
        {
        name: "Rare Beauty Soft Pinch Dewy Liquid Blush (Bliss)", 
            description: " A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes. Ingredient Callouts: Free of sulfates SLS and SLES, parabens, formaldehydes, formaldehyde-releasing agents, phthalates, mineral oil, retinyl palmitate, oxybenzone, coal tar, triclosan, and triclocarban, and contains less than one percent of synthetic fragrances. This product is also vegan and cruelty-free. What Else You Need to Know: Create a pinch-perfect flush using this featherweight formula infused with long-lasting pigments that last all day. Available in matte or dewy finishes, this liquid blush blends beautifully to create soft, buildable color with a natural, second-skin finish.", 
            category_id: category_3.id, 
            price: 9.99,
            file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/beauty/rare-beauty.jpg",
            fileName: "beauty/rare-beauty.jpg"
        },
        {
        name: "Maybelline Lash Sensational Washable Mascara, Lengthening and Volumizing for a Full Fan Effect, Blackest Black, 1 Count", 
            description: "Lash Sensational Mascara: Exclusive fanning mascara brush with ten layers of bristles reveals layers of lashes for a sensational full-fan effect; Add the look of length and volume without clumping; Ophthalmologist tested, contact lens safe.
            Define Your Eye: No eye makeup look is complete without Maybelline Mascara; Amp up the drama with The Falsies Mascara, keep it classic with the iconic Great Lash, or go for a smooth, clump-free natural-but-better look Colossal or Lash Sensational Mascara.
            Maybelline Is The Eye Expert: Whatever your signature eye look, whether natural or dramatic, Maybelline helps create looks that draw eyes; With a broad array of pencil and liquid eyeliners, highly pigmented eyeshadows, iconic mascara, and eyebrow makeup.", 
            category_id: category_3.id, 
            price: 7.69,
            file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/beauty/maybellene.jpg",
            fileName: "beauty/maybellene.jpg"
        },
        {
        name: "MAC Matte Lipstick Marrakesh", 
            description: "Formulated to shade, define and showcase the lips. Hundreds of hues, high-fashion textures.
            The iconic product that made M·A·C famous. 
            Imported.Animal TestingMAC is working toward a cruelty-free world. MAC does not test on animals and never asks others to test on the brand’s behalf—MAC advocates for ending animal testing globally and is taking steps toward that goal every day.
            Back To MAC MAC accepts returns of its primary packaging through.", 
            category_id: category_3.id, 
            price: 16.39,
            file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/beauty/mac.jpg",
            fileName: "beauty/mac.jpg"
        },
        {
        name: "Neutrogena Makeup Remover Facial Cleansing Towelette Singles, Daily Face Wipes Remove Dirt, Oil, Makeup & Waterproof Mascara, Gentle, Individually Wrapped, 100% Plant-Based Fibers, 20 ct", 
            description: "20-count of individually wrapped pre-moistened Neutrogena Makeup Remover Face Wipe Singles. Individually wrapped facial cleansing towelettes are protected so you always have a fresh and effective wipe for complete cleansing and makeup removal.
            Makeup remover facial cleansing towelettes work to dissolve all traces of dirt, removes bacteria, impurities, oil and makeup on skin while also removing pollution, sweat and sunscreen, for superior cleansing and makeup removing power at your fingertips.
            Facial cleansing wet wipes are ophthalmologist-, dermatologist-, and allergy-tested and gentle on the eyes. The effective formula removes up to 99% of makeup--even stubborn waterproof mascara--without tugging.
            Our Clean Promise to you and the Planet. These facial cleansing wipes are made with 100% plant-based fibers, biodegrade in 35 days in home compost, and are formulated without phthalates, parabens, sulfates, alcohols, soaps, or dyes.
            Single-use wipes are disposable and thoroughly cleanse skin gently and leave behind no heavy residue, so there's no need to rinse. Plus, they're great to use in a daily beauty or skincare routine for a refreshing self-care experience anywhere.", 
            category_id: category_3.id, 
            price: 6.49,
            file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/beauty/makeup-remover.jpg",
            fileName: "beauty/makeup-remover.jpg"
        },
        {
        name: "NYX PROFESSIONAL MAKEUP Butter Gloss, Non-Sticky Lip Gloss - Madeleine (Mid-Tone Nude)", 
            description: "Butter Gloss: Buttery soft and silky smooth, our decadent Butter Gloss is available in a wide variety of sumptuous shades; Each glossy color delivers sheer to medium coverage that melts onto your lips.
            Kissable Lips: Our best selling Butter Gloss goes on smooth and creamy and is never sticky, leaving your lips soft, supple and kissable; Try all of our delicious shades, from Angel Food Cake to Tiramisu.
            Lip Products for the Perfect Pout: Doll your lips in creamy, long lasting perfection; Try our complete line of lip makeup including liquid lipstick, lip gloss, lip cream, lip liner and butter gloss.
            Cruelty Free Cosmetics: We believe animals belong in our arms, not in a lab; All of our makeup is certified and acknowledged by PETA as a cruelty free brand; We don't test any of our products on animals.
            Discover NYX Professional Makeup: Try all of our professional makeup products today from eyeshadow, eyeliner, and false lashes to liquid lipstick, lip gloss, primer, concealer, setting sprays and eyebrow makeup.", 
            category_id: category_3.id, 
            price: 4.97,
            file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/beauty/nyx-makeup.jpg",
            fileName: 'beauty/nyx-makeup.jpg'
        },

        {
        name: "Horizon Basics Rubber Encased Hex Dumbbell Hand Weight 20 pounds",
            description: "Dumbbell hand weight for exercise and strength training; ideal for use in fitness classes, home gym, or workout area.
            Includes a single 30 pound dumbbell with a solid cast iron core.
            Non-slip textural surface for a secure grip.
            Hexagonal black rubber-encased ends prevent rolling and promote stay-in-place storage.
            Product dimensions: 12.9 x 5.6 x 5 inches (LxWxH) with 1.4-inch grip diameter.
            Sold as a single unit. Product is packaged and sold as one weight.",
            category_id: category_4.id,
            price: 51.87,
            file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/sports+and+outdoor/dumbell.jpg",
            fileName: "sports and outdoor/dumbell.jpg"
        },


        {
            name: "Yeti Tundra 45 Cooler", 
            description: "The YETI Tundra 45 combines versatility with durability with a capacity of up to 26 cans with a recommended 2:1 ice-to-contents ratio.
Ice stays ice thanks to up to 3 inches of PermaFrost Insulation and an extra thick FatWall design is certified Bear-Resistant.
The Rotomolded Construction makes the Tundra armored to the core and virtually indestructible so wherever you decide to take it, this portable cooler’s sturdy construction will stand up to the rigors of the journey.
All Tundra coolers feature T-Rex Lid Latches constructed of heavy-duty rubber so you’ll never see another busted latch and has patented keeper technology.", 
category_id: category_4.id, 
price: 325.00,
file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/sports+and+outdoor/yeti+cooler.jpg",
fileName: "sports and outdoor/yeti cooler.jpg"
},


{
    name: "GoSports Golf Hitting Mat Artificial Turf Mat for Indoor/Outdoor Practice Includes 3 Rubber Tees - Standard, PRO, or Elite", 
    description: "GS PRO TURF: The commercial grade synthetic turf is designed to feel like real grass turf while providing for maximum longevity.
    15mm MAT THICKNESS: Made using a robust 15mm layer of non-slip foam padding to simulate real turf and provide maximum stability on any surface, indoors or outdoors.
    HUGE 5 ft x 4 ft SIZE: Designed for right and left-handed golfers of all abilities with 6 different teeing positions.
3 RUBBER TEES: 1.5 in tee allows use of a wood tee at any height, and 2.25 in and 3.5 in tees provide options for common driver tee heights.", 
    category_id: category_4.id, 
    price: 139.99,
    file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/sports+and+outdoor/golf.jpg",
    fileName: "sports and outdoor/golf.jpg"
        },
        

        {
        name: "TEMI Kids Bow and Arrow Set - LED Light Up Archery Toy Set with 10 Suction Cup Arrows, Target & Quiver, Indoor and Outdoor Toys for Children Boys Girls", 
        description: "Tart Aiming & Firing Right Away – Package contains 1 main bow body, 10 suction cup arrows, target and quiver. 2*AA batteries needed(not included).
            More Attractive Outdoor Toy - The archery set with led light is one of the favorite outdoor toys for kids.The LED lights make you track the trace of arrow in the night easily and add some cool effect.
            Educational & Fun - Kids will practice their accuracy skills, hand-eye coordination, fine motor skills and aim right on target in the most fun and interactive way.
            Durable Design - Premium elasticity material of bows and arrows ensure its durable features, not easily broken. It has a smooth surface, which makes it safe for children. Sucker can be adsorbed on the smooth glass, wall, and targets(provided).", 
        category_id: category_4.id, 
        price: 36.99,
        file: "https://horizon-seeds.s3.us-west-1.amazonaws.com/sports+and+outdoor/kids+bow.jpg",
        fileName: "sports and outdoor/kids bow.jpg"
        }
        
        
    ]


    PRODUCTS.each do |product|
        keys = {
        name: product[:name],
        description: product[:description],
        category_id: product[:category_id],
        price: product[:price]
        }
        
        obj = Product.create!(keys)
        file = URI.open(product[:file]) 
        obj.photo.attach(io: file, filename: product[:fileName])
    end

# Reviews for Horizon Basics Aluminum USB 3.1 Type-C Docking...
Review.create!(
    reviewer_id: 1,
    product_id: 1,
    body: "This docking station is amazing! It provides all the ports I need for my MacBook and charges my devices super quickly. Highly recommend!",
    rating: 5,
    headline: "Great Docking Station"
)

Review.create!(
    reviewer_id: 2,
    product_id: 1,
    body: "I've been using this docking station for a few weeks now and it's been a great addition to my desk setup. The build quality is solid and it looks great too!",
    rating: 4,
    headline: "Solid Docking Station"
)

Review.create!(
    reviewer_id: 3,
    product_id: 1,
    body: "This docking station is exactly what I was looking for! It has all the ports I need and the charging speed is lightning fast.",
    rating: 5,
    headline: "Exactly What I Needed"
)

Review.create!(
    reviewer_id: 4,
    product_id: 1,
    body: "I was hesitant to buy this docking station at first because of the price, but it's definitely worth it. It's made my work setup so much more efficient and organized!",
    rating: 5,
    headline: "Expensive but Worth It"
)

Review.create!(
    reviewer_id: 5,
    product_id: 1,
    body: "I was looking for a docking station that could charge my MacBook and other devices at the same time, and this one delivered! It's been a great addition to my home office.",
    rating: 4,
    headline: "Great for Charging Multiple Devices"
)

# Reviews for Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID
Review.create!(
    reviewer_id: 6,
    product_id: 2,
    body: "I love my new MacBook Air! The M1 chip makes everything lightning fast and the Retina display is beautiful.",
    rating: 5,
    headline: "Amazing Laptop"
)

Review.create!(
    reviewer_id: 7,
    product_id: 2,
    body: "The battery life on this MacBook Air is incredible. I've been using it for hours on end and it still has plenty of juice left!",
    rating: 5,
    headline: "Great Battery Life"
)

Review.create!(
    reviewer_id: 8,
    product_id: 2,
    body: "This MacBook Air is perfect for on-the-go work. It's lightweight and easy to carry around, but still has plenty of power for all my tasks.",
    rating: 4,
    headline: "Perfect for Travel"
)

Review.create!(
    reviewer_id: 9,
    product_id: 2,
    body: "I was hesitant to upgrade to the M1 chip at first, but I'm so glad I did. This MacBook Air is lightning fast and has been a joy to use.",
    rating: 5,
    headline: "Upgrade Worth It"
)

Review.create!(
    reviewer_id: 10,
    product_id: 2,
    body: "This MacBook Air is a great value for the price. It has all the features I need for work and personal use, and the Retina display is stunning.",
    rating: 4,
    headline: "Great Value"
)

# Reviews for SAMSUNG Galaxy S21

# Reviews for SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, White
Review.create!(
    reviewer_id: 11,
    product_id: 3,
    body: "This phone is amazing! The camera takes stunning photos and the 120Hz display is buttery smooth. I highly recommend it.",
    rating: 5,
    headline: "Great Phone"
)

Review.create!(
    reviewer_id: 12,
    product_id: 3,
    body: "The battery life on this phone is incredible. I've been using it for a full day and haven't had to charge it once!",
    rating: 4,
    headline: "Great Battery Life"
)

Review.create!(
    reviewer_id: 13,
    product_id: 3,
    body: "This phone is lightning fast and can handle all my apps and games with ease. The 128GB of storage is plenty for all my photos and music.",
    rating: 5,
    headline: "Fast and Spacious"
)

Review.create!(
    reviewer_id: 14,
    product_id: 3,
    body: "The camera on this phone is amazing. I've been able to take some stunning photos and videos with it.",
    rating: 5,
    headline: "Great Camera"
)

Review.create!(
    reviewer_id: 15,
    product_id: 3,
    body: "I love the design of this phone - it's sleek and modern. The white color looks especially nice.",
    rating: 4,
    headline: "Sleek Design"
)

# Reviews for iPhone 13 Pro, 128GB, Sierra Blue
Review.create!(
    reviewer_id: 1,
    product_id: 4,
    body: "The iPhone 13 Pro is an amazing phone! The camera is top-notch and the battery life is impressive.",
    rating: 5,
    headline: "Amazing Phone"
)

Review.create!(
    reviewer_id: 2,
    product_id: 4,
    body: "I love the Sierra Blue color of this phone. It's a nice change from the usual gold or silver options.",
    rating: 4,
    headline: "Beautiful Color"
)

Review.create!(
    reviewer_id: 3,
    product_id: 4,
    body: "This phone is incredibly fast and responsive. The 128GB of storage is plenty for all my apps and photos.",
    rating: 5,
    headline: "Fast and Spacious"
)

Review.create!(
    reviewer_id: 4,
    product_id: 4,
    body: "The camera on this phone is amazing! The new cinematic mode is especially cool.",
    rating: 5,
    headline: "Great Camera"
)

Review.create!(
    reviewer_id: 5,
    product_id: 4,
    body: "The battery life on this phone is impressive. I can go a full day without needing to charge it.",
    rating: 4,
    headline: "Great Battery Life"
)

# Reviews for Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black
Review.create!(
    reviewer_id: 6,
    product_id: 5,
    body: "These headphones are amazing! The noise cancellation is top-notch and the sound quality is excellent.",
    rating: 5,
    headline: "Amazing Headphones"
)





