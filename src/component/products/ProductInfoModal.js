import React from "react";
import PropTypes from 'prop-types';
import {Modal, withStyles} from "material-ui";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
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

class ProductInfoModal extends React.Component {

    render() {
        const {classes} = this.props;
        console.log(this.props.isOpen);
        console.log(this.props.product);
        return <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.isOpen}
                onClose={this.props.handleClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    {this.props.isOpen &&
                    <div>
                        <p>Product info</p>
                        <div style={{display: "flex"}}>
                            <div style={{display: "flex", width: "80%"}}><p>Name:</p><p>{this.props.product.name}</p></div>
                            <div style={{display: "flex"}}><p>Price:</p><p>{this.props.product.price}$</p></div>
                        </div>
                        <div>
                            <p>
                                <p>Description:</p>{this.props.product.description}
                            </p>
                        </div>
                    </div>}
                </div>
            </Modal>
        </div>;
    }
}


ProductInfoModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductInfoModal);