class BarCocktail < ApplicationRecord
  belongs_to :bar
  belongs_to :cocktail
  has_many :reviews
  has_many :users, through: :reviews

    ## review associations key-value chain
    def special_name
      "#{self.cocktail.name} by #{self.bar.name}"
    end
end
