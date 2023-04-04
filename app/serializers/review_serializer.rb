class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :comment, :user_id, :bar_cocktail_id

  belongs_to :user, serializer: UserSerializer
  belongs_to :bar_cocktail, serializer: BarCocktailSerializer
end
