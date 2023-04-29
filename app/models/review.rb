class Review < ApplicationRecord
  belongs_to :user
  belongs_to :bar_cocktail

  validates :comment, length: { minimum: 6, too_short: 'has to be %<count>s letters! Leave a phone number or price' }
  validates :stars, numericality: { { in: 1..5 }, only_integer: true }
end
