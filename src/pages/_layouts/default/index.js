import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default DefaultLayout;

DefaultLayout.propType = {
  children: PropTypes.element.isRequired,
};
