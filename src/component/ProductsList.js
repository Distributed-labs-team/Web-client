import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({});

class ProductsList extends React.Component {

    render() {
        return (
            <div>
                Products list
            </div>
        );
    }
}

ProductsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductsList);
