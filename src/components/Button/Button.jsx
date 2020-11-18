import React from 'react';

import {
  ButtonContainer,
  Icon,
} from './Button.styles';

function Button(props) {
  const {
    icon = null,
    text,
  } = props;

  return (
    <ButtonContainer {...props}>
      {icon && (
        <Icon src={icon} />
      )}
      {text}
    </ButtonContainer>
  );
}

export default Button;
