import React from "react";
import {Paper} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import {getUserOrders} from "../../api/orders";
import {connect} from "react-redux";


const styles = theme => ({
    main: {
        overflowY: 'auto',
        height: '100%'
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
});

class UserOrders extends React.Component {

    componentWillMount() {
        getUserOrders(this.props.userEmail);
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.orders);

        return <div className={classes.main}>
            <Paper className={classes.root}>
                My Orders {this.props.userEmail}
            </Paper>
        </div>
    }
}


const mapStateToProps = (state) => (
    {
        orders: state.orders
    });

export default withStyles(styles)(connect(mapStateToProps)(UserOrders));