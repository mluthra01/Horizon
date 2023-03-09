class ChangeReviewReferenceFromReviewerToUser < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :reviewer_id, :user_id
  end
end
