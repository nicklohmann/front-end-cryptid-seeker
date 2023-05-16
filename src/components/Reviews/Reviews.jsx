import ReviewCard from '../ReviewCard/ReviewCard'

//import styles from './Reviews.module.css'

const Reviews = (props) => {
  console.log(props.reviews);
  if(!props.reviews) return <h4>No Reviews</h4>
  return ( 
    <>
    {props.reviews.map((review) => (
      <ReviewCard
        key={review._id}
        review={review}
        user={props.user}
        cryptidId={props.cryptidId}
        handleDeleteReview={props.handleDeleteReview}
      />
    ))}
    </>
  )
}

export default Reviews;