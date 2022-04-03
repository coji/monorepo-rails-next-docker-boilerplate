# frozen_string_literal: true

# Hello world controller
class HelloController < ApplicationController
  def index
    render json: { message: 'Hello World!' }
  end
end
