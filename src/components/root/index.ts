import { connect } from 'react-redux';
import { getTodos } from '../../selectors/todos';
import Root from './root';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getTodos(state),
  };
};

export default connect(mapStateToProps)(Root);
