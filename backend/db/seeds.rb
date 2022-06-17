puts "🌱 Seeding spices..."

Lawn.create(
    name: "The White House",
    address: "1400 Pennsylvania Ave, Washington, DC",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/WhSouthLawn.JPEG"
)

Lawn.create(
    name: "Christian's House",
    address: "42 Drury Lane",
    image_url: "https://m1.cbhomes.com/p/62/6205402/5A6a55A981f64a6/pds23tp.jpeg"
)

Lawn.create(
    name: "The National Mall",
    address: "1 Natty Mally Way",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/National_Mall%2C_Washington%2C_D.C._%2820100325-DSC01310%29.jpg"
)

Review.create(
    body: "Holy canoli that's a nice lawn.",
    lawn_id: 13,
    author: "George Washington",
    stars: 5   
)

Review.create(
    body: "Best in the biz.",
    author: "Thomas Jefferson",
    lawn_id: 13,
    stars: 5   
)

Review.create(
    body: "I would cry if I stepped foot on this lawn. Maybe because I'd get hurt by the Secret Service, but also because of its beauty",
    author: "Christian Keil",
    lawn_id: 13,
    stars: 5   
)

Review.create(
    body: "It's no White House, but it's a lawn, alright.",
    author: "Christian Keil",
    lawn_id: 14,
    stars: 4   
)

Review.create(
    body: "It's no White House, but it's a lawn, alright.",
    author: "Christian Keil",
    lawn_id: 15,
    stars: 4   
)

puts "✅ Done seeding!"
