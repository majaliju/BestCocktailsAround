class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :latitude, :longitude, :address, :ip_address

  has_many :reviews, serializer: ReviewSerializer
end
