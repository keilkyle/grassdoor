class AddLawnImage < ActiveRecord::Migration[6.1]
  def change
      add_column :lawns, :image_url, :string
  end
end
