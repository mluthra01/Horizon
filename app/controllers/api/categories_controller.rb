class Api::CategoriesController < ApplicationController

    def index
    @categories = Category.all

    if params[:search]
      @categories = @categories.where('lower(name) LIKE ?', "%#{params[:search].downcase}%")
    end

    render 'api/categories/index'
  end

    def show
        @category = Category.find_by(id: params[:id])
        @products = @category.products

        if params[:search]
            @products =  @products.where('lower(name) LIKE ?', "%#{params[:search].downcase}%")
        end

        render 'api/categories/show'
    end
end
