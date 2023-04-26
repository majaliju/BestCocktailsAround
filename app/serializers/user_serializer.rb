class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :latitude, :longitude, :address, :ip_address

  has_many :reviews, serializer: ReviewSerializer
  has_many :bar_cocktails, through: :reviews
end
