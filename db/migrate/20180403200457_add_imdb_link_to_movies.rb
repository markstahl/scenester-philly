class AddImdbLinkToMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :imdb_link, :string
  end
end
