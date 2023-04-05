class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :latitude, :longitude

  has_many :reviews, serializer: ReviewSerializer
end
