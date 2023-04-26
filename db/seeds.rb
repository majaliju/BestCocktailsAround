##~ needs more elaborate seeding, this is just beginner level

puts "---- deleting the old data first"
Bar.delete_all
User.delete_all
Cocktail.delete_all
BarCocktail.delete_all
Review.delete_all

puts "---- Now for the re-seeding..."

puts "----- seeding 5 drinks"
old_fashioned = Cocktail.create(name: "Old Fashioned", ingredients: ["Bourbon", "Whiskey", "bitters", "orange twist", "sugar"], image: "")
cosmopolitan = Cocktail.create(name: "Cosmopolitan", ingredients: ["Vodka", "Cointreau", "cranberry juice", "fresh lime juice", "lemon twist"], image: "")
mojito = Cocktail.create(name: "Mojito", ingredients: ["White Rum", "fresh mint", "sugar", "lime", "soda water"], image: "")
caipirinha = Cocktail.create(name: "Caipirinha", ingredients: ["Rum", "Cachaca", "lime", "sugar"], image: "")
long_island_ice_tea = Cocktail.create(name: "Long Island Ice Tea", ingredients: ["Vodka", "Gin", "Rum", "Tequila", "Triple Sec", "cola", "syrup", "lemon juice"], image: "")



puts "--- BROOKLYN BARS ----"
puts "----- seeding 5 brooklyn bars"
ore_bar = Bar.create!(name: "Ore Bar", address: "277 Graham Ave, Brooklyn, NY 11211")
basik_bar = Bar.create!(name: "Basik", address: "323 Graham Ave, Brooklyn, NY 11211")
blinkys_bar = Bar.create!(name: "Blinky's", address: "609 Grand St, Brooklyn, NY 11211")
clover_bar = Bar.create!(name: "Clover Bar", address: "210 Smith St, Brooklyn, NY 11201")
sunken_harbor_club_bar = Bar.create!(name: "Sunken Harbor Club", address: "372 Fulton St, Brooklyn, NY 11201")

puts "----- seeding 5 cocktails per Brooklyn bar"
basik_bar_old_fashioned = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: old_fashioned.id)
basik_bar_cosmopolitan = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: cosmopolitan.id)
basik_bar_mojito = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: mojito.id)
basik_bar_caipirinha = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: caipirinha.id)
basik_bar_long_island_ice_tea = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: long_island_ice_tea.id)

ore_bar_old_fashioned = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: old_fashioned.id)
ore_bar_cosmopolitan = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: cosmopolitan.id)
ore_bar_mojito = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: mojito.id)
ore_bar_caipirinha = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: caipirinha.id)
ore_bar_long_island_ice_tea = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: long_island_ice_tea.id)

clover_bar_old_fashioned = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: old_fashioned.id )
clover_bar_cosmopolitan = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: cosmopolitan.id)
clover_bar_mojito = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: mojito.id)
clover_bar_caipirinha = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: caipirinha.id)
clover_bar_long_island_ice_tea = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: long_island_ice_tea.id)

sunken_harbor_club_bar_old_fashioned = BarCocktail.create(bar_id: sunken_harbor_club_bar.id, cocktail_id: old_fashioned.id)
sunken_harbor_club_bar_cosmopolitan = BarCocktail.create(bar_id: sunken_harbor_club_bar.id, cocktail_id: cosmopolitan.id)
sunken_harbor_club_bar_mojito = BarCocktail.create(bar_id: sunken_harbor_club_bar.id, cocktail_id: mojito.id)
sunken_harbor_club_bar_caipirinha = BarCocktail.create(bar_id: sunken_harbor_club_bar.id, cocktail_id: caipirinha.id)
sunken_harbor_club_bar_long_island_ice_tea = BarCocktail.create(bar_id: sunken_harbor_club_bar.id, cocktail_id: long_island_ice_tea.id)

blinkys_bar_old_fashioned = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: old_fashioned.id)
blinkys_bar_cosmopolitan = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: cosmopolitan.id)
blinkys_bar_mojito = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: mojito.id)
blinkys_bar_caipirinha = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: caipirinha.id)
blinkys_bar_long_island_ice_tea = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: long_island_ice_tea.id)


puts "--- MANHATTAN BARS ----"
puts "----- seeding 5 Manhattan bars"
mace_bar = Bar.create!(name: "Mace", address: "35 West 8th St, New York, NY 10011")
attaboy_bar = Bar.create!(name: "Attaboy", address: "134 Eldridge St, New York, NY 10010")
belemans_bar= Bar.create!(name: "Belemans Bar", address: "35 E 76th Street, New York, NY 10075")
sidneys_five_bar= Bar.create!(name: "Sidney's Five", address: "103 First Avenue, New York, NY 10003")
nrm_bar = Bar.create!(name: "Nothing Really Matters", address: "1627 Broadway, New York, NY 10019")

puts "----- seeding 5 cocktails per Manhattan bar"

puts "--- QUEENS BARS ----"
puts "----- seeding 5 queens bars"
sekend_sun = Bar.create!(name: "Sek'end Sun", address: "68-38 Forest Ave storefront B, Queens, NY 11385")
sundown_bar = Bar.create!(name: "Sundown Bar", address: "32-11 Broadway, Queens, NY 11106")
the_bonnie_bar = Bar.create!(name: "The Bonnie", address: "29-12 23rd Ave, Queens, NY 11105")
sweet_afton = Bar.create!(name: "Sweet Afton", address: "30-09 34th St, Queens, NY 11103")
beer_garden= Bar.create!(name: "Bohemian Hall and Beer Garden", address: "29-19 24th Ave, Queens, NY 11105")

puts "----- seeding 5 cocktails per Queens bar"

puts "--- CHICAGO BARS ----"
puts "----- seeding 5 chicago bars"
nobodys_darling_bar = Bar.create!(name: "Nobody's Darling", address: "1744 W Balmoral Ave, Chicago, IL 60640")
hopleaf_bar = Bar.create!(name: "Hopleaf Bar", address: "5148 N Clark St, Chicago, IL 60640")
green_mill_bar = Bar.create!(name: "Green Mill Cocktail Lounge", address: "4802 N Broadway St, Chicago, IL 60640")
carols_pub = Bar.create!(name: "Carol's Pub", address: "659 N Clark St, Chicago, IL 60640")
long_room_bar = Bar.create!(name: "Long Room Chicago", address: "1612 W Irving Park Rd #1, Chicago, IL 60613")

puts "----- seeding 5 cocktails per Chicago bar"

puts "--- LA BARS ----"
puts "----- seeding 5 LA bars"
thunderbolt_bar = Bar.create!(name: "Thunderbolt", address: "1263 W Temple St, Los Angeles, CA 90026")
melody_bar = Bar.create!(name: "Melody", address: "9132 S Sepulveda Blvd, Los Angeles, CA 90045")
everson_royce_bar = Bar.create!(name: "Everson Royce Bar", address: "1936 E 7th St, Los Angeles, CA 90021" )
ruby_fruit_bar = Bar.create!(name: "The Ruby Fruit", address: "3510 West Sunset Blvd, Los Angeles, CA")
baby_gee_bar = Bar.create!(name: "Baby Gee", address: "1227 East Fourth St, Long Beach, CA")

puts "----- seeding 5 cocktails per LA bar"

puts "--- CALIFORNIA BARS ----"
puts "----- seeding 5 california bars"
aero_club = Bar.create!(name: "Aero Club", address: "3365 India St, San Diego, CA 92103")
five_points_bar= Bar.create!(name: "Five Points", address: "169 W Santa Clara St, San Jose, CA 95113")
sobre_mesa_bar = Bar.create!(name: "Sobre Mesa", address: "1618 Franklin St, Oakland, CA 94612")
causwells_bar = Bar.create!(name: "Causwells", address: "2346 Chestnut St, San Francisco, CA 94123")
dento_union_bar = Bar.create!(name: "Dento Union", address: "849 Union St, San Francisco, CA 94123")

puts "----- seeding 5 cocktails per California bar"


puts "--- NASHVILLE BARS ----"
puts "----- seeding 5 nashville bars"
springwater_bar = Bar.create!(name: "Springwater Supper Club & Lounge", address: "115 27th Ave N, Nashville, TN 37203")
henley_bar = Bar.create!(name: "Henley", address: "2023 Broadway, Nashville, TN 37203")
patterhouse_house = Bar.create!(name: "The Patterson House", address: "1711 Division St, Nashville, TN 37203")
green_hour_bar = Bar.create!(name: "Green Hour Bar", address: "1201 5th Ave N, Nashville, TN 37208")
la_jackson_bar = Bar.create!(name: "L.A. Jackson", address: "401 11th Ave S, Nashville, TN 37203")

puts "----- seeding 5 cocktails per Nashville bar"




puts "----- seeding the 5 main users"
user1 = User.create!(username: "guy1", password: "123123123123")
user2 = User.create!(username: "guy2", password: "123123123123")
user3 = User.create!(username: "guy3", password: "123123123123")
user4 = User.create!(username: "guy4", password: "123123123123")
user5 = User.create!(username: "guy5", password: "123123123123")

#### find a faker random comment gem
puts "----- seeding 10 reviews for user1"
r1 = Review.create(stars: 5, comment: "My favorite one around", user_id: user1.id, bar_cocktail_id: basik_bar_old_fashioned.id)
r2 = Review.create(stars: 4, comment: "Not the best but very very good", user_id: user1.id, bar_cocktail_id: ore_bar_mojito.id)
r3 = Review.create(stars: 3, comment: "Eh not good but not bad", user_id: user1.id, bar_cocktail_id: ore_bar_long_island_ice_tea.id)
r4 = Review.create(stars: 5, comment: "Can't beat this cosmo", user_id: user1.id, bar_cocktail_id: basik_bar_cosmopolitan.id)
r5 = Review.create(stars: 5, comment: "My favorite one of all!", user_id: user1.id, bar_cocktail_id: blinkys_bar_caipirinha.id)


puts "Seeded well!"