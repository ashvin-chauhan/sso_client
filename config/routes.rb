Rails.application.routes.draw do
  get 'developers/restful_api'

  root to: 'home#show'
  get '/auth/auth0/callback' => 'auth0#callback'
  get '/auth/failure' => 'auth0#failure'
  get '/auth/sso' => 'auth0#sso'
  get '/auth/logout' => 'auth0#logout'

  resources :users, only: [] do
  	collection do
  		get 'super_admin'
  		get 'admin'
  		get 'manager'
  		get 'developer'
      get 'developers/restful_api'
      get 'autocomplete_sidebar_links'
      get 'logout'
  	end
  end
end
