class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :image_url, null: false
      t.string :title, null: false
      t.integer :year, null: false
      t.string :coordinates, array: true, null: false
      t.string :location_name

      t.timestamps
    end
  end
end
