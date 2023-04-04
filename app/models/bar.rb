class Bar < ApplicationRecord
  has_many :bar_cocktails
  has_many :cocktails, through: :bar_cocktails
  has_many :reviews, through: :bar_cocktails
end
