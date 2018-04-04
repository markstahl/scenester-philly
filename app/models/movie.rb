class Movie < ApplicationRecord

  validates :image_url, presence: true
  validates :title, presence: true
  validates :year, presence: true
  validates :coordinates, presence: true
  validates :description, presence: true
end
