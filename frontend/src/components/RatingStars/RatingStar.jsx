const RatingStars = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
    stars.push(<img className="star-ratings-image" src='/assets/filled.svg' alt="filled-star" key={i} />);
    }

    for (let i = 0; i < emptyStars; i++) {
    stars.push(<img className="star-ratings-image" src='/assets/img.svg' alt="empty-star" key={i + filledStars} />);
    }

    return stars;
};

export default RatingStars;
