class CheckoutController < ApplicationController
	require 'stripe'

	def process_payment
		token_id = params[:stripe_token]
		amount = params[:amount]
		Stripe.api_key = ENV['STRIPE_SECRET_KEY']
	
		begin
			payment_method = Stripe::PaymentMethod.create(
				type: 'card',
				card: {
					token: token_id
				}
			)
	
			payment_intent = Stripe::PaymentIntent.create(
				amount: amount,
				currency: 'usd',
				description: 'One-time Payment',
				payment_method: payment_method.id,
				confirm: true
			)
	
			render json: { status: 'success', payment: payment_intent }
		rescue Stripe::StripeError => e
			render json: { status: 'error', message: e.message }
		end
	end
end
