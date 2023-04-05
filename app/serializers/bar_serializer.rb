class BarSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :country, :latitude, :longitude
end
