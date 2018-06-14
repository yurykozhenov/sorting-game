import { connect } from 'react-redux';

import Session from '../Session/Session';
import { initSortingGame } from '../sortingGameActions';

const mapDispatchToProps = { initSortingGame };

export default connect(
  null,
  mapDispatchToProps,
)(Session);
