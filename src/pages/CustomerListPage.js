import React, {Component} from 'react'
import CustomerList from '../components/customers/CustomerList'
import CustomerItem from '../components/customers/CustomerItem'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index.action';

class ProductListPage extends Component {

    componentWillMount() {
        this.setState({isLogin: this.props.isLogin})
    }
    componentWillReceiveProps(nextProps) {
        this.setState({isLogin: nextProps.isLogin})
    }
    componentDidMount() {
        this.props.getFetchCustomerRequest();
    }

    handleDelete = (id) => {
        this.props.getDeleteCustomerRequest(id);
    }

    renderItem = () => {
        let {customers, searchText, sort} = this.props;
         let result = null;
        // //on search
            if (customers) {
            //   console.log(customers)
                customers = customers.filter( value => {
                    return value.TenKH.toLowerCase().indexOf(searchText) !== -1;
                });
                if(sort.by === 'name') {
                    console.log(sort);
                    customers.sort((a, b) => {
                        if(a.TenKH < b.TenKH)
                            return - sort.value;
                        if(a.TenKH > b.TenKH)
                            return  sort.value;
                        return 0;
                    })
                }
                result = customers.map((customer, index) => {
                    return <CustomerItem
                        key={index}
                        index={index + 1}
                        customer={customer}
                        handleDelete={this.handleDelete}/>
                });

            }
             return result;
        }
      

    render() {

        const local = localStorage.getItem('user');

        if (!local && !this.state.isLogin) {
            return <Redirect to='/login'/>
        }

        return (
            <div className='mt-20'>
                <CustomerList >
                    {this.renderItem()}
                </CustomerList>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        customers: state.customers,
        isLogin: state.isLogin, 
        searchText: state.searchText,
        sort: state.sortText,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFetchCustomerRequest: () => {
            dispatch(actions.actFetchCustomersRequest())
        },
        getDeleteCustomerRequest: (id) => {
            dispatch(actions.actDeleteCustomerRequest(id))
        },
        onLogout: () => {
            dispatch(actions.actLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)