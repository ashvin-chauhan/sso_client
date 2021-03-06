Rails.application.routes.draw do
  get 'developers/restful_api'

  root to: 'home#show'
  get '/auth/auth0/callback' => 'auth0#callback'
  get '/auth/failure' => 'auth0#failure'
  get '/auth/sso' => 'auth0#sso'
  get '/auth/logout' => 'auth0#logout'
  get '/docs' => "home#docs"

  resources :users, only: [] do
  	collection do
  		get 'super_admin'
  		get 'admin'
  		get 'manager'
  		get 'developer'
      get 'developers/restful_api'
      match 'autocomplete_sidebar_links' => "users#autocomplete_sidebar_links", :as => :autocomplete_sidebar_links ,via: [ :POST ,:get ]
      get 'logout'
  	end
  end
end
