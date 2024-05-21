class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :deactivate]

  # GET /employees/active
  def active
    @employees = Employee.where(active: true).order(last_name: :asc)
    render json: @employees
  end

  # GET /employees/:id
  def show
    direct_reports = Employee.where(manager_id: @employee.id)
    render json: { employee: @employee, direct_reports: direct_reports }
  end

  # GET /employees/hired_in_date_range
  def hired_in_date_range
    start_date = params[:start_date]
    end_date = params[:end_date]

    @employees = Employee.where(hire_date: start_date..end_date).order(hire_date: :desc)
    render json: @employees
  end

  # POST /employees
  def create
    @employee = Employee.new(employee_params)

    if @employee.save!
      render json: @employee, status: :created
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # PUT /employees/:id/deactivate
  def deactivate
    if @employee.update(active: false)
      render json: @employee
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Employee not found' }, status: :not_found
  end

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :position, :hire_date, :manager_id, :active)
  end
end
