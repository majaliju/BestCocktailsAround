class BarCocktailSerializer < ActiveModel::Serializer
  attributes :id, :cocktail_id, :bar_id, :special_name

  belongs_to :bar
  belongs_to :cocktail


end
