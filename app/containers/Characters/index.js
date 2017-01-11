/*
 *
 * Characters
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectCharacters from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class Characters extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Characters"
          meta={[
            { name: 'description', content: 'Description of Characters' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectCharacters();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
