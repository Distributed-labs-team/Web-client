import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
});

class Page extends React.Component {

    render() {
        return (
            <div>
                Hello, page
            </div>
        );
    }
}

Page.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);
