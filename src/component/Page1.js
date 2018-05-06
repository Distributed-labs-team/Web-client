import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({});

class Page1 extends React.Component {

    render() {
        return (
            <div>
                Hello, page1
            </div>
        );
    }
}

Page1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page1);
