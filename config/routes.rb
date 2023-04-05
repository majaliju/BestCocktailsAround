Rails.application.routes.draw do
  resources :bars
  resources :bar_cocktails
  resources :cocktails
  resources :users
  resources :reviews
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'

  # Defines the root path route ("/")
  # root "articles#index"
end
