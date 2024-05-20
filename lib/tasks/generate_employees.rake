namespace :db do
  desc "Generate random employee data"
  task generate_employees: :environment do
    require 'faker'

    number_of_employees = 50

    positions = ["Manager", "Developer", "Designer", "QA", "DevOps"]
    manager_ids = [nil]

    number_of_employees.times do
      employee = Employee.create!(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        position: positions.sample,
        hire_date: Faker::Date.between(from: '2010-01-01', to: Date.today),
        manager_id: manager_ids.sample,
        active: [true, false].sample
      )
      manager_ids << employee.id if employee.position == "Manager"
    end

    puts "#{number_of_employees} employees generated successfully!"
  end
end
