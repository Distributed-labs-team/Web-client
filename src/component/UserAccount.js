import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({});

class UserAccount extends React.Component {

    render() {
        return (
            <div>
                User account
            </div>
        );
    }
}

UserAccount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAccount);
