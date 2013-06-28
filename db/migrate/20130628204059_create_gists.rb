class CreateGists < ActiveRecord::Migration
  def change
    create_table :gists do |t|
      t.string :title
      t.integer :owner_id

      t.timestamps
    end
  end
end
