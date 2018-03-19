Rails.application.routes.draw do
  get 'static_pages/home', to: "static_pages#home"

  resources :users

  root "static_pages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
