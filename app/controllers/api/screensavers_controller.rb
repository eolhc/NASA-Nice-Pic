class Api::ScreensaversController < ApplicationController

  def create

    response = {}

    screensaver = Screensaver.new
    screensaver.image_url = params['image_url']
    screensaver.title = params['title']
    screensaver.date = params['date']
    screensaver.save

    render json: response
  end

end
