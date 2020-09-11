Rails.application.routes.draw do
  #just to show index in flavors
  resources :flavors, only: :index
  resources :foods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  #just to show create  in users
  resources :users, only: :create

  # for the join table...
  get '/foods/:food_id/flavors/:id', to: 'flavors#add_flavor_to_food'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
