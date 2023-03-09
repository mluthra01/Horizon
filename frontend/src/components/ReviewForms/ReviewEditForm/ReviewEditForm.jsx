import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import "./ReviewEditForm.css"

const ReviewEditForm = () => {
    const dispatch = useDispatch();
    const { productId, reviewId } = useParams();

    
}   

export default ReviewEditForm