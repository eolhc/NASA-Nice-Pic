Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # on the index page i want to have a form that displays a date query
  #and a link to view the saved screensavers!
  root to: "pages#index"

  #from here i want to get the image url and title and date of the query
  #that will be an ajax call to the NASA API

  # i want to post the response from the NASA API to the database
  post "/screensavers", to: "screensavers#create"

  #and then i want a page to display the saved screensavers
  get "/api/displayscreensavers", to: "api/screensavers"


end
