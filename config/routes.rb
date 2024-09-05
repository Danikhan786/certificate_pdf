Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#root"

  post '/checkout/process_payment', to: 'checkout#process_payment', as: 'checkout_process_payment'
  post 'pdf/convert_image', to: 'pdf#convert_image'

end