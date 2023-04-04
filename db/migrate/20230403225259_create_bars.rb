class CreateBars < ActiveRecord::Migration[7.0]
  def change
    create_table :bars do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :address
      t.string :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
