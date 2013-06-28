class Gist < ActiveRecord::Base
  attr_accessible :owner_id, :title

  belongs_to :user,
  :foreign_key => :owner_id

  has_many :favorites
  has_many :likers,
  :through => :favorites,
   :source => :user
end
