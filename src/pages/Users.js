import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from '../redux/modules/users';
import { withDone } from 'react-router-server';

class Users extends Component {
    componentWillMount() {
        const { UserActions, data, done } = this.props;
        if (data.length !== 0) return false;
        UserActions.getUsers().then(done, done);
    }

    render() {
        const { data } = this.props;

        const userList = data.map(
            user => <li key={user.id}>{user.name}</li>
        );

        return (
            <div>
                <ul>
                    {userList}
                </ul>
            </div>
        );
    }
}

export default withDone(connect(
    state => ({
        data: state.users.data
    }),
    dispatch => ({
        UserActions: bindActionCreators(usersActions, dispatch)
    })
)(Users));