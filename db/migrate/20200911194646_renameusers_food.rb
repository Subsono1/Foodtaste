class RenameusersFood < ActiveRecord::Migration[6.0]
  def change
    rename_column :foods, :users_id, :user_id
  end
end
