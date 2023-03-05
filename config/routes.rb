Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] 
    resources :cart_items, only: [:create, :update, :destroy, :show, :index]
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:show, :index]

    resources :categories, only: [:show, :index] do
      resources :products, only: [:index]
    end
  end
  get '*path', to: "static_pages#frontend_index"
  delete 'api/cart_items', to: 'api/cart_items#clear_cart'

end
