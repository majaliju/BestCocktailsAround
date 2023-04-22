class User < ApplicationRecord
  has_secure_password
  geocoded_by :address
  after_validation :geocode
## user's address is geocoded; we get lat-lng upon their address entering

  
  has_many :reviews

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 8, maximum: 254 }


end
