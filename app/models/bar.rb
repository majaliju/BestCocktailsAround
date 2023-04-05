class Bar < ApplicationRecord
  geocoded_by :address
  after_validation :geocode  ##bring this back in, only commented out now for simplicity

  has_many :bar_cocktails
  has_many :cocktails, through: :bar_cocktails
  has_many :reviews, through: :bar_cocktails
end
