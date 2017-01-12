class CreateScreensavers < ActiveRecord::Migration[5.0]
  def change
    create_table :screensavers do |t|
      t.string :title
      t.string :image_url
      t.string :date

      t.timestamps
    end
  end
end
