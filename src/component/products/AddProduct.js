import React from "react";
import {Button, TextField} from "material-ui";
import NumberInput from 'material-ui-number-input';
import {withStyles} from "material-ui/styles/index";
import {createProduct} from "../../api/products";


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '60%',
    },
});

class AddProduct extends React.Component {

    state = {
        name: '',
        description: '',
        price: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    createProduct = () => {
        let newProduct = this.state;
        newProduct.price = parseInt(this.state.price);
        newProduct.ownerEmail = this.props.user.email;
        console.log(newProduct);
        createProduct(newProduct);
    };

    render() {
        const { classes } = this.props;

        return <div>
            <div><p>Create New Product</p></div>
            <div>
                <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="description"
                    label="Description"
                    className={classes.textField}
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                />
                <TextField
                    id="price"
                    label="Price"
                    className={classes.textField}
                    value={this.state.price}
                    onChange={this.handleChange('price')}
                    margin="normal"
                />
            </div>
            <Button variant="raised" className={classes.button} onClick={this.createProduct}>Create</Button>
        </div>
    }

}

export default  withStyles(styles)(AddProduct)