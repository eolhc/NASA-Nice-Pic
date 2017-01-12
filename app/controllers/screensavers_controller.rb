class ScreensaversController < ApplicationController

  def display
    @screensavers = Screensaver.all

    render :display
  end

end
