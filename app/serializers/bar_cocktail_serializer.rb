class BarCocktailSerializer < ActiveModel::Serializer
  attributes :id, :cocktail_id, :bar_id, :special_name

  belongs_to :bar
  belongs_to :cocktail
  has_many :reviews
  has_many :users, through: :reviews


end
