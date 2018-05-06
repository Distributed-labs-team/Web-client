import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({});

class Page2 extends React.Component {

    render() {
        return (
            <div>
                Hello, page2
            </div>
        );
    }
}

Page2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page2);
