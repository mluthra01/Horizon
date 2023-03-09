class Api::ReviewsController < ApplicationController
wrap_parameters include: Review.attribute_names + ['userId', 'productId']
    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @user = current_user
        @review = Review.new(review_params)
            if @review.save
                render :show
            else
                render json: @review.errors_full_messages, status: 422
            end
    end

    def update
        @user = current_user
        @review = Review.find_by(id: params[:id])
        @review.user_id = @user.id
            if @review && review.update(review_params)
                render :show
            else
                render json: ["Review can not be updated"]
            end
    end

    def destroy
        @user = current_user
        @review = Review.find_by(id: params[:id])
        @review.destroy
        render :index

    end

    private

    def review_params
        params.require(:review).permit(:user_id, :product_id, :headline, :body, :rating)
    end
    
end
