import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default AuthLayout;

AuthLayout.propType = {
  children: PropTypes.element.isRequired,
};
