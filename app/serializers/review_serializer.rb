class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :comment, :user_id, :bar_cocktail_id
end
