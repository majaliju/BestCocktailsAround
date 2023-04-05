class BarCocktail < ApplicationRecord
  belongs_to :bar
  belongs_to :cocktail

    ## review associations key-value chain
    def special_name
      "#{self.cocktail.name} by #{self.bar.name}"
    end
end
