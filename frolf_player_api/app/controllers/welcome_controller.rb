class WelcomeController < ApplicationController
    def index
        render json: {status: 200, message: 'Frolf API'}
    end
end
