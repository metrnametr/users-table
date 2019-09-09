import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersTable from '../../components/UsersTable';
import getUsers from '../../actions';
import FilterByName from '../../components/FilterByName';

class UsersPage extends Component {
  state = {
    filterValue: '',
  };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  toggleFilterByName = (filterValue) => {
    this.setState({
      filterValue,
    });
  };

  render() {
    const { filterValue } = this.state;
    const {
      usersInfo: { users },
    } = this.props;
    const { loading, error } = users;
    if (loading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>Error</div>;
    }

    return (
      <div className="container-table">
        <FilterByName toggleFilterByName={this.toggleFilterByName} />
        <UsersTable users={users.users} filterValue={filterValue} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUsers,
};

const mapStateToProps = (users) => ({
  usersInfo: users,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPage);
