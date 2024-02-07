import { getReviewsDetails } from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getReviewsDetails(movieId)
      .then(({ data }) => {
        setReview(data.results);
      })
      .catch(error => {
        throw new Error('ooops...');
      });
  }, [movieId]);

  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We dont have any reviews</p>
      )}
    </>
  );
};
export default Reviews;
