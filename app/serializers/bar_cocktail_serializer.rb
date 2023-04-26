class BarCocktailSerializer < ActiveModel::Serializer
  attributes :id, :cocktail_id, :bar_id, :special_name

  belongs_to :bar, serializer: BarSerializer
  belongs_to :cocktail, serializer: CocktailSerializer
  has_many :reviews, serializer: ReviewSerializer
  has_many :users, through: :reviews, serializer: UserSerializer


end
