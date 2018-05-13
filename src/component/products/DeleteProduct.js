import React from "react";
import {Button, Modal} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import {removeProduct} from "../../api/products";


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

class DeleteProduct extends React.Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    deleteProduct = () => {
        console.log(this.props.productId);
        removeProduct(this.props.productId);
        this.handleClose();
        this.props.closeModal();
    };

    render() {
        const {classes} = this.props;
        console.log(this.props.disabled);

        return <div>
            {this.props.disabled
                ? <Button variant="raised" color="secondary" disabled className={classes.button}>Delete</Button>
                : <Button variant="raised" color="secondary" className={classes.button}
                          onClick={this.handleOpen}>Delete</Button>}
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <div>
                        <div><p>Are you sure you want to delete this product?</p></div>
                        <div>
                            <Button style={{width: '50%'}} className={classes.button}
                                    onClick={this.handleClose}>No</Button>
                            <Button style={{width: '50%'}} color="secondary" className={classes.button}
                                    onClick={this.deleteProduct}>Yes</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    }

}

export default withStyles(styles)(DeleteProduct)