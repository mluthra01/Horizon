class Api::ProductsController < ApplicationController
    
    def index
        if params[:category_id]
            @category = Category.find(params[:category_id])
            @products = @category.products
        else
            @products = Product.all
        end
        if params[:search]
            @products = @products.where('lower(name) LIKE ?', "%#{params[:search].downcase}%")
        end
                
            render 'api/products/index'
    end
        
        def show
            @product = Product.find_by(id: params[:id])
            render 'api/products/show'
        end

    def random
        @products = Product.all.order("RANDOM()").limit(12)
        render 'api/products/index'
    end
        
end