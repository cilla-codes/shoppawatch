Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :show]
      resources :carts do
        collection do
          get "get_cart"
          post "add_item"
        end
      end
    end
  end
end
