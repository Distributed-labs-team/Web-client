import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {getProducts} from "../api/products";
import {connect} from "react-redux";

const styles = theme => ({});

class ProductsList extends React.Component {

    componentWillMount() {
        getProducts();
    }

    render() {
        return (
            <div>
                Products list
                {this.props.products !== [] &&
                    this.props.products.map(product =>
                        <div>{product.name + ' ' + product.price}</div>
                    )
                }
            </div>
        );
    }
}

ProductsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => (
    {
        products: state.products
    });

export default withStyles(styles)(connect(mapStateToProps)(ProductsList));
