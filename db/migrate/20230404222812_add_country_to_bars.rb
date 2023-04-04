class AddCountryToBars < ActiveRecord::Migration[7.0]
  def change
    add_column :bars, :country, :string
  end
end
