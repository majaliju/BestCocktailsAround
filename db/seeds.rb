##~ needs more elaborate seeding, this is just beginner level

puts "----- seeding 3 brooklyn bars"
ore_bar = Bar.create(name: "Ore Bar", address: "277 Graham Ave, Brooklyn, NY 11211")
basik_bar = Bar.create(name: "Basik", address: "323 Graham Ave, Brooklyn, NY 11211")
blinkys_bar = Bar.create(name: "Blinky's", address: "609 Grand St, Brooklyn, NY 11211")

puts "----- seeding 3 LA bars"
thunderbolt_bar = Bar.create(name: "Thunderbolt", address: "1263 W Temple St, Los Angeles, CA 90026")
melody_bar = Bar.create(name: "Melody", address: "9132 S Sepulveda Blvd, Los Angeles, CA 90045")
everson_royce_bar = Bar.create(name: "Everson Royce Bar", address: "1936 E 7th St, Los Angeles, CA 90021" )

puts "----- seeding 3 california bars"
aero_club = Bar.create(name: "Aero Club", address: "3365 India St, San Diego, CA 92103")
five_points_bar= Bar.create(name: "Five Points", address: "169 W Santa Clara St, San Jose, CA 95113")
sobre_mesa_bar = Bar.create(name: "Sobre Mesa", address: "1618 Franklin St, Oakland, CA 94612")

puts "----- seeding 3 chicago bars"

puts "----- seeding 3 nashville bars"

puts "----- seeding 3 manhattan bars"

puts "----- seeding 3 florida bars"


puts "----- seeding 5 drinks"
old_fashioned = Cocktail.create(name: "Old Fashioned", ingredients: ["Bourbon", "Whiskey", "bitters", "orange twist", "sugar"])
cosmopolitan = Cocktail.create(name: "Cosmopolitan", ingredients: ["Vodka", "Cointreau", "cranberry juice", "fresh lime juice", "lemon twist"])
mojito = Cocktail.create(name: "Mojito", ingredients: ["White Rum", "fresh mint", "sugar", "lime", "soda water"])
caipirinha = Cocktail.create(name: "Caipirinha", ingredients: ["Rum", "Cachaca", "lime", "sugar"])
long_island_ice_tea = Cocktail.create(name: "Long Island Ice Tea", ingredients: ["Vodka", "Gin", "Rum", "Tequila", "Triple Sec", "cola", "syrup", "lemon juice"])

puts "----- seeding 15 cocktails"
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

blinkys_bar_old_fashioned = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: old_fashioned.id )
blinkys_bar_cosmopolitan = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: cosmopolitan.id)
blinkys_bar_mojito = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: mojito.id)
blinkys_bar_caipirinha = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: caipirinha.id)
blinkys_bar_long_island_ice_tea = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: long_island_ice_tea.id)


puts "----- seeding 20 reviews"



puts "Seeded well!"