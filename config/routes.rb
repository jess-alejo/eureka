Rails.application.routes.draw do

  resources :nuggets
  root 'home#index'
end
