class Employee < ApplicationRecord
  belongs_to :manager, class_name: 'Employee', optional: true
  has_many :direct_reports, class_name: 'Employee', foreign_key: 'manager_id'

  validates :first_name, :last_name, :position, :hire_date, presence: true
  validates :active, inclusion: { in: [true, false] }
end
