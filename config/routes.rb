Rails.application.routes.draw do
  get 'static_pages/home', to: "static_pages#home"
  
  get '/login', to: 'static_pages#index'
  post   '/login',   to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'



  resources :users

  root "static_pages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
