import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {getProducts, getUserProducts} from "../../api/products";
import {connect} from "react-redux";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from "material-ui";
import TablePaginationActionsWrapped from "./TablePaginationActionsWrapped";
import {CheckBox, CheckBoxOutlineBlank, NotInterested, Settings} from "@material-ui/icons/es/index";
import ProductInfoModal from "./ProductInfoModal";

const styles = theme => ({
    main: {
        overflowY: 'auto',
        height: '100%'
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class ProductsList extends React.Component {

    state = {
        page: 0,
        rowsPerPage: 10,
        isOpen: false,
    };

    componentWillMount() {
        if (!this.props.isOwner) {
            getProducts();
        } else {
            getUserProducts(this.props.userEmail)
        }
    }

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    openProductInfo = productId => {
        let product = this.props.products.filter(function( product ) {
            return product.id === productId;
        })[0];
        this.setState({
            isOpen: true,
            product: product,
        })
    };

    handleCloseModal = () => {
        this.setState({isOpen: false});
    };

    render() {
        const {classes, products} = this.props;
        const {rowsPerPage, page} = this.state;

        return (
            <div className={classes.main}>
                <Paper className={classes.root}>
                    Products list
                    <div className={classes.tableWrapper}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell numeric>Price ($)</TableCell>
                                    {this.props.isOwner && <TableCell style={{width: "1px"}}/>}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(product =>
                                    <TableRow
                                        key={product.id}
                                        onClick={() => this.openProductInfo(product.id)}>
                                        <TableCell>
                                            <div><p>{product.name}</p></div>
                                        </TableCell>
                                        <TableCell>
                                            <div><p>{product.description}</p></div>
                                        </TableCell>
                                        <TableCell numeric>
                                            <div><p>{product.price}</p></div>
                                        </TableCell>
                                        {this.props.isOwner && <TableCell style={{width: "1px"}}>
                                            {product.bought ? <NotInterested/> : <Settings/>}
                                        </TableCell>}
                                    </TableRow>
                                )}
                            </TableBody>
                            {products.length > rowsPerPage &&
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        colSpan={3}
                                        count={products.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onChangePage={this.handleChangePage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                        Actions={TablePaginationActionsWrapped}
                                    />
                                </TableRow>
                            </TableFooter>}
                        </Table>
                        <ProductInfoModal isOpen = {this.state.isOpen}
                                          isOwner = {this.props.isOwner}
                                          product={this.state.product}
                                          handleClose={this.handleCloseModal}/>
                    </div>
                </Paper>
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
