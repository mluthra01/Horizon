class Api::CartItemsController < ApplicationController
    # before_action :require_logged_in
    wrap_parameters include: CartItem.attribute_names + ['productId', 'userId' ]

    def index
        @user = current_user
        @cart_items = @user.cart_items
        render :index
    end

    def create  
        @user = current_user
        @cart_item = CartItem.find_by(product_id: params[:product_id])
        
        if @cart_item 
                @cart_item.quantity += params[:cart_item][:quantity].to_i
                
        else
            @cart_item = CartItem.new(cart_item_params)
            @cart_item.user_id = current_user.id
            
        end
        if @cart_item.save
            
            render :show
        else
            render json: {errors: "this is wrong"}, status: 422
        end

    end

    def clear_cart
        @user = current_user
        @cart_items = CartItem.where(user_id: @user.id).destroy_all
        if !@cart_items
        render :show
        else

        render json: ['lol']
        end
        # @cart = CartItem.find_by(id: params[:id])
        # @cart.destroy_all
        # render json: ["deleted"]
    end


    def update
        @cart_item = CartItem.find_by(id: params[:id])
            if @cart_item.update(cart_item_params)
                render :show
            else
                render json: @cart_item.errors.full_messages, status: 422
            end
    end

    def destroy
        @cart = CartItem.find_by(id: params[:id])
        @cart.destroy
        render json: ["deleted"]
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:quantity, :user_id, :product_id)
    end
end
