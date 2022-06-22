class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
    get '/' do
      "Hello World"
    end

  get "/lawns" do
    lawns = Lawn.all
    lawns.to_json(include: :reviews)
  end

  post "/lawns" do
    lawn = Lawn.create(
      name: params[:name],
      address: params[:address],
      image_url: params[:image_url]
    )
    lawn.to_json
  end

  get "/lawns/:id" do
    lawn = Lawn.find(params[:id])
    lawn.to_json(include: :reviews)
  end

  get "/reviews" do
    reviews = Review.all
    reviews.to_json
  end

  get "/reviews/:id" do
    review = Review.find(params[:id])
    review.to_json
  end

  post "/reviews" do 
    review = Review.create(
      body: params[:body],
      author: params[:author],
      lawn_id: params[:lawn_id],
      stars: params[:stars]
    )
    review.to_json
  end

  patch "/reviews/:id" do
    review = Review.find(params[:id])
    review.update(
      body: params[:body],
      stars: params[:stars]
    )
    review.to_json
  end

  delete "/reviews/:id" do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

end
