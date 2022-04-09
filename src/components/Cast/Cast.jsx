import { Title, CastList } from './Cast.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/Api';

export default function Cast() {
  let { filmId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    API.getMovieCast(filmId).then(r => {
      console.log(r.cast);
      setCast(r.cast);
    });
  }, [filmId]);

  return (
    <>
      <Title>Cast</Title>
      <CastList>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            {profile_path ? (
              <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={{ name }} />
            ) : (
              <img
                src={'../../images/blank-profile-picture-973461__340.webp'}
                alt={'No poster'}
                width={300}
              />
            )}
            <p>Character: {character}</p>
            <p>{name}</p>
          </li>
        ))}
      </CastList>
    </>
  );
}
