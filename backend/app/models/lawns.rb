class Lawn < ActiveRecord::Base
    has_many :reviews

    def self.alpha
        Lawn.order("name")
    end

end