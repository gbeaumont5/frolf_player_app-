class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :pdga_number
      t.string :criteria
      t.integer :events
      t.integer :earnings
      t.string :image
      
    end
  end
end
