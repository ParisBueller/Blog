import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    render() {
       const { user } = this.props;
        if (!user) {
            return null;
        }
        return<div className="header">{user.name}r</div>;
    }
}
//mapStateToProps called with ownProps as well as state.
//This is a reference to the props about to be passed to the component
//we can extract anything doing something to our state or props coming in
// to the mapStateToProps function( i.e.: .find())
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);