Rails.application.routes.draw do
  get 'times/index'
  get 'codes/create'
  get 'codes/index'
  get 'codes/destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.htm
  
  root to: 'homes#top'
  
  get 'black_jack' => 'homes#black_jack', as: "black_jack"
  get 'scroll_anime' => 'homes#scroll_anime', as: "scroll_anime"
  
  resources :lists , only:[:create, :index, :destroy]
  resources :codes , only:[:create, :index, :destroy]
  resources :times , only:[:index] do
    collection do
      get 'experiments'
    end
  end
  
end
