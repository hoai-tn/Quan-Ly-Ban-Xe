import React, {Component} from 'react'
import ProducerList from '../components/producers/ProducerList'
import ProducerItem from '../components/producers/ProducerItem'
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
        this.props.getFetchProducersRequest();
    }

    handleDelete = (id) => {
        this.props.getDeleteProducerRequest(id);
    }

    renderItem = () => {
        let {producers, searchText, sort} = this.props;
         let result = null;
        // //on search
            if (producers) {
                producers = producers.filter( value => {
                    return value.TenNCC.toLowerCase().indexOf(searchText) !== -1;
                });
                if(sort.by === 'name') {
                    console.log(sort);
                    producers.sort((a, b) => {
                        if(a.TenNCC < b.TenNCC)
                            return - sort.value;
                        if(a.TenNCC > b.TenNCC)
                            return  sort.value;
                        return 0;
                    })
                }
                result = producers.map((producer, index) => {
                    return <ProducerItem
                        key={index}
                        index={index + 1}
                        producer={producer}
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
                <ProducerList >
                    {this.renderItem()}
                </ProducerList>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        producers: state.producers,
        isLogin: state.isLogin, 
        searchText: state.searchText,
        sort: state.sortText,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFetchProducersRequest: () => {
            dispatch(actions.actFetchProducersRequest())
        },
        getDeleteProducerRequest: (id) => {
            dispatch(actions.actDeletProducersRequest(id))
        },
        onLogout: () => {
            dispatch(actions.actLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)