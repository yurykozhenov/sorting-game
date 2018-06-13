import { connect } from 'react-redux';

import { createSession } from '../sessionActions';
import Session from '../Session/Session';

const mapDispatchToProps = { createSession };

export default connect(
  null,
  mapDispatchToProps,
)(Session);
