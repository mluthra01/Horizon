

# [Horizon](https://horizon-v6ys.onrender.com/)

## Overview
Horizon is a full-stack e-commerce application that allows users to browse available products, add them to their cart, and leave reviews. Built as a clone of the world's largest e-commerce website, Amazon, Horizon provides a familiar shopping experience that users are already comfortable with.



## Technologies used
![react](https://user-images.githubusercontent.com/71748091/224372496-9f02c9c2-72ed-4827-a67a-574f08305bfd.svg)
![redux](https://user-images.githubusercontent.com/71748091/224372171-d6b81997-8db6-46bb-b8ee-99ae3c415e66.svg)
![postgres](https://user-images.githubusercontent.com/71748091/224372216-8addf1ce-0db2-498b-870e-8d361a726fa6.svg)
![aws](https://user-images.githubusercontent.com/71748091/224372279-51826bd5-0472-47e9-b50a-bc29d9899cbc.svg)

## User Flow
  Users are able to search from a list of products, choose the one they want, read more about the product in the following page, add products to card,       successfully checking out and leave a review if they like/dislike a product.
  
https://user-images.githubusercontent.com/71748091/224383971-36de4464-5120-4e37-a559-040ae60c8b7f.mov


## Important Code
 ### Handling cart quantity so it doesnt add duplicate item when adding quantity
``` ruby
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
```

### Search Route
``` javascript
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
```
### Handling Review Creation and Editing Dynamically

``` Ruby 
    const [errors, setErrors ] = useState([]);
    const [headline, setHeadline] = useState(review ? review.headline ? review.headline : '' : '');
    const [body, setBody] = useState(review ? review.body ? review.body : '' : '');
    const [rating, setRating] = useState(review ? review.rating ? review.rating : '' : '');

    if (userId === undefined) history.push("/login");
    if (!product) return null;

    const handleSubmit =  (e) => {
        e.preventDefault();

        const reviewData = {
            ...review,
            headline,
            body,
            rating,
            userId,
            productId
        }
        setErrors([]);
        if (formType === "Edit Review") {
        dispatch(updateReview(reviewData))
            .then(() => {
            history.push(`/products/${productId}`)
        })
            .catch(handleError);
        } else {
        dispatch(createReview({ productId, userId, headline, body, rating }))
        .then(() => {
            history.push(`/products/${productId}`)
        })
            .catch(handleError);
        }
    }
```
 ## Future Implementations
  + Make users able to list products
  + Add a return, orders and  address section
  + Buy now Modal that let user buy the item directly from the Product listing
