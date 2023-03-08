
const Review = () => {


const countries = ['USA', 'Canada', 'Australia', 'Japan', 'Brazil', 'India', 'Mexico'];
    const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
    };

    return (
        <div className="product-review-container">
            <div className="divider">l</div>
            <div className="custom-reivew-label">Customer Review</div>
            <div className="review-name-container">

            </div>
        </div>   

    )
}

export default Review