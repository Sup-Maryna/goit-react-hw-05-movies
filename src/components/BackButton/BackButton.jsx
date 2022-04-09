import { useNavigate } from 'react-router-dom';

import { GoBackButton, GoBackButtonLabel } from './BackButton.styled';

export default function BackButton({ location }) {
  let navigate = useNavigate();
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <GoBackButton type="button" onClick={onGoBack}>
      <GoBackButtonLabel>RETURN</GoBackButtonLabel>
    </GoBackButton>
  );
}
