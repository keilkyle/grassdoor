class Cleanup < ActiveRecord::Migration[6.1]
  def change  
    remove_column :reviews, :review_date
  end
end
