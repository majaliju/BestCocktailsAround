class BarSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :country, :latitude, :longitude, :image

  has_many :bar_cocktails
  has_many :cocktails, through: :bar_cocktails
  # has_many :reviews, through: :bar_cocktails
end
