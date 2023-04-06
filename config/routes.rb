Rails.application.routes.draw do

  ####! the 5 below are just only: as a sketch
  ####! these are not final, these are just during testing purposes
  ####! there will be likely less for all non-reviews models
  resources :bars, only: [:index, :show, :create]
  resources :bar_cocktails, only: [:index, :show, :create]
  resources :cocktails, only: [:index, :show, :create]
  resources :users, only: [:create]
  resources :reviews, only: [:index, :create, :update, :destroy]

  ## the login, logout, and user-authentication routes
  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get '/hello', to: 'application#hello_world'
  get '/location', to: 'application#location_finder'

  # Defines the root path route ("/")
  # root "articles#index"
end
