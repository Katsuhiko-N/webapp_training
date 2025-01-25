Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.htm
  
  root to: 'homes#top'
  
  get 'black_jack' => 'homes#black_jack', as: "black_jack"
  get 'scroll_anime' => 'homes#scroll_anime', as: "scroll_anime"
  
end
