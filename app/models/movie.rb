class Movie < ApplicationRecord
  has_many :locations

  validates :image_url presence: true
  validates :title presence: true
  validates :year presence: true
end
