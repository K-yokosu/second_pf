import React from 'react';
import ReactDom from 'react-dom';

import '../scss/app.scss';
import Default from './layout/default';

ReactDom.render(
  <Default />,
  document.getElementById('root')
);