/**
*
* Home
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function Home() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Home;
