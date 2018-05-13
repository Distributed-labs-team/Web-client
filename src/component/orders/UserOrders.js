import React from "react";
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Paper, Typography} from "material-ui";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    product: {
        marginLeft: '100px',
        width: '70%',
        textAlign: 'left'
    }
});

class UserOrders extends React.Component {

    componentWillMount() {
        getUserOrders(this.props.userEmail);
    }

    formatDate(date) {
        console.log(date);
        return date.dayOfMonth + ' ' + date.month + ' ' + date.year + ' ' + date.hour + ':' + date.minute;
    }

    render() {
        const {classes} = this.props;
        console.log(this.props.orders);

        return <div className={classes.main}>
            <Paper className={classes.root}>
                My Orders
                {this.props.orders &&
                this.props.orders.map(order =>
                    <ExpansionPanel key={order.id}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <div style={{width:'40%'}}>№{order.id}</div>
                            <div style={{width:'40%'}}>{this.formatDate(order.createDate)}</div>
                            <div style={{width:'20%'}}>{order.price}$</div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className={classes.product}>
                                <div>
                                    <Typography variant="title" gutterBottom>
                                        Product name: {order.products[0].name}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="subheading" gutterBottom>
                                        Description: {order.products[0].description}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <Typography variant="title" gutterBottom>
                                    Price: {order.products[0].price}$
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>)}
            </Paper>
        </div>
    }
}


const mapStateToProps = (state) => (
    {
        orders: state.orders
    });

export default withStyles(styles)(connect(mapStateToProps)(UserOrders));