Rails.application.routes.draw do
  root to: 'home#show'
  get '/dashboard' => 'dashboard#show'
  get '/auth/auth0/callback' => 'auth0#callback'
  get '/auth/failure' => 'auth0#failure'
  get '/auth/sso' => 'auth0#sso'
  get '/auth/logout' => 'auth0#logout'
end
