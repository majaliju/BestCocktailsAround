class AddImageToBars < ActiveRecord::Migration[7.0]
  def change
    add_column :bars, :image, :string
  end
end
