class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.date :hire_date
      t.integer :manager_id
      t.boolean :active

      t.timestamps
    end
  end
end
