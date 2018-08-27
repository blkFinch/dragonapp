Rails.application.routes.draw do

  get 'static_pages/home', to: "static_pages#home"
  get '/react',       to:      'react#home'

  get '/login',      to: 'static_pages#index'
  post   '/login',   to: 'sessions#create'
  delete 'logout',   to: 'sessions#destroy'

  get '/reference',   to: 'reference#show'



  resources :users do

  end

  resources :campaigns do
    member do
      patch :add_user
      get :search_user
      patch :remove_user
    end

    resources :pcharacters
    resources :posts
  end

  resources :pcharacters


  root "static_pages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
