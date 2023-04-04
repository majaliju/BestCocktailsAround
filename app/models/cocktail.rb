class Cocktail < ApplicationRecord
  has_many :bar_cocktails
  has_many :bars, through: :bar_cocktails
  has_many :reviews, through: :bar_cocktails
end
