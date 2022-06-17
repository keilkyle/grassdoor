class Start < ActiveRecord::Migration[6.1]
  def change

    create_table :lawns do |t|
      t.string :name
      t.string :address
    end

    create_table :reviews do |t|
      t.string :body
      t.string :author
      t.integer :lawn_id
      t.timestamp :review_date
    end

  end
end
