class CreateMovie < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :image_url
      t.string :title
      t.integer :year
    end
  end
end
