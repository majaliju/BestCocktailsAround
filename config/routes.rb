Rails.application.routes.draw do
  resources :reviews
  resources :bar_cocktails
  resources :cocktails
  resources :bars
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'

  # Defines the root path route ("/")
  # root "articles#index"
end
