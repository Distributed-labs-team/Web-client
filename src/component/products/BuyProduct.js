import React from "react";
import {Button, Modal} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import {removeProduct} from "../../api/products";
import {createOrder} from "../../api/orders";


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        width: '35%',
        height: '75px',
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class BuyProduct extends React.Component {

    state = {
        openBuy: false,
    };

    handleOpenBuy = () => {
        this.setState({openBuy: true});
    };

    handleCloseBuy = () => {
        this.setState({openBuy: false});
    };

    buyProduct = () => {
        console.log(this.props.product);
        let order = {
            products: [this.props.product],
        };
        createOrder(order);
        this.handleCloseBuy();
        this.props.closeModal();
    };

    render() {
        const {classes} = this.props;

        return <div>
            <Button variant="raised"  color="primary" className={classes.button} onClick={this.handleOpenBuy}>Buy</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.openBuy}
                onClose={this.handleCloseBuy}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <div>
                        <div><p>Do you want to buy this product?</p></div>
                        <div>
                            <Button style={{width: '50%'}} className={classes.button} onClick={this.handleCloseBuy}>No</Button>
                            <Button style={{width: '50%'}} color="primary" className={classes.button}
                                    onClick={this.buyProduct}>Yes</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    }

}

export default withStyles(styles)(BuyProduct)