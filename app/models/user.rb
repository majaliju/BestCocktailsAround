class User < ApplicationRecord
  has_secure_password
  geocoded_by :ip_address
  after_validation :geocode
  
  has_many :reviews

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 8, maximum: 254 }


  ###! user's ip_address is automatically set upon log-in or enter
  ###! however, user can manually set an address via an input-box
  ###! this address then overrides the lat-lng of the ip_address


  ##* ip_address we get first automatically
  ##* ip_address sets the lat-lng
  ##* if user enters user[:address]
    ###^ now we override the original lat-lng

end
