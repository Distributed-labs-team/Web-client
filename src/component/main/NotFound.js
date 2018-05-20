import React from 'react';
import PropTypes from 'prop-types';


class NotFound extends React.Component {

    render() {
        return (
            <div>
                Page not found
            </div>
        );
    }
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default NotFound;
