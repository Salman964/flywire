Rails.application.routes.draw do
  resources :employees, only: [:index, :show, :create, :update] do
    collection do
      get 'active', to: 'employees#active'
      get 'hired_in_date_range', to: 'employees#hired_in_date_range'
    end

    member do
      put 'deactivate', to: 'employees#deactivate'
    end
  end
end
