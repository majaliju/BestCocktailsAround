class Review < ApplicationRecord
  belongs_to :user
  belongs_to :bar_cocktails
end
