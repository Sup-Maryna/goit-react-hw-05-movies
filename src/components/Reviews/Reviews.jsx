import { Title, ReviewList, ReviewItem } from '../Cast/Cast.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/Api';

export default function Reviews() {
  let { filmId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.getMovieReviews(filmId).then(r => {
      console.log(r.results);
      setReviews(r.results);
    });
  }, [filmId]);

  return (
    <>
      <Title>Reviews</Title>
      <ReviewList>
        {reviews.lengs !== 0 ? (
          reviews.map(({ id, autor, content }) => (
            <ReviewItem key={id}>
              <p>Autor: {autor}</p>
              <p>{content}</p>
            </ReviewItem>
          ))
        ) : (
          <p>We hevent had reviews yet</p>
        )}
      </ReviewList>
    </>
  );
}
