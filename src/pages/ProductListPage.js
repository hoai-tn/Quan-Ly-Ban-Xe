import React, {Component} from 'react'
import ProductList from '../components/products/ProductList'
import ProductItem from '../components/products/ProductItem'
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
        this.props.getFetchProductRequest();
    }

    handleDelete = (id) => {
        this
            .props
            .getDeleteProductRequest(id);
    }

    renderItem = () => {
        let {products, searchText, sort} = this.props;
        let result = null;
        //on search
            if (products) {

                products = products.filter(item => {
                    return item.TenHang.toLowerCase().indexOf(searchText) !== -1;
                });
                //sort
                if(sort.by === 'name') {
                products.sort((a, b) => {
                    if(a.TenHang < b.TenHang)
                        return -sort.value
                    if(a.TenHang > b.TenHang)   
                        return sort.value
                    return 0;
                })
                }else {
                    products.sort((a, b) => {
                        if(a.SoLuong < b.SoLuong)
                            return - sort.value;
                        if(a.SoLuong > b.SoLuong)
                            return sort.value;
                        return 0;
                    }) 
                }

                result = products.map((product, index) => {
                    return <ProductItem
                        key={index}
                        index={index + 1}
                        product={product}
                        handleDelete={this.handleDelete}/>
                });
            }
            return result;
        }
      

    render() {

        const local = localStorage.getItem('user');

        if ( !this.state.isLogin) {
            return <Redirect to='/login'/>
        }

        return (
            <div className='mt-20'>
                <ProductList >
                    {this.renderItem()}
                </ProductList>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        isLogin: state.isLogin, 
        searchText: state.searchText,
        sort: state.sortText
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFetchProductRequest: () => {
            dispatch(actions.actFetchFetchProductRequest())
        },
        getDeleteProductRequest: (id) => {
            dispatch(actions.actDeleteProductsRequest(id))
        },
        onLogout: () => {
            dispatch(actions.actLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)