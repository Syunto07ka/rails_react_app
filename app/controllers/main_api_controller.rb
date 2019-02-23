class MainApiController < ApplicationController
    def index
        @person = {'name' => '山田', 'email' => 'example@example.com'}
        render :json => @person
    end
  end