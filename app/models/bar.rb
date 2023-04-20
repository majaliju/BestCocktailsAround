class Bar < ApplicationRecord
  geocoded_by :address
  after_validation :geocode 

  has_many :bar_cocktails
  has_many :cocktails, through: :bar_cocktails
  has_many :reviews, through: :bar_cocktails

  ###! populate city, state, country from address
  ### need to set that

end
