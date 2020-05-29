import * as Types from '../constants/ActionTypes';

import callApi from '../utils/callApi';
export const actFetchLoginRequest = () => {
    return (dispatch) => {
        return callApi('login', 'GET', null)
        .then(res => dispatch(actFetchLogin(res.data)))
    }
}
export const actFetchLogin = (login) => {
    return {
        type: Types.FETCH_LOGIN,
        login
    }
}
export const actLogin = () => {
    return {type: Types.LOGIN}
}
export const actLogout = () => {
    return {type: Types.LOGOUT}
}
// call api and dispatch actions 
export const actFetchFetchProductRequest = () => {
    return (dispatch) => {
        return callApi('products', 'get', null)
            .then(res => dispatch(actFectchProduct(res.data.data)))
    }
}
export const actFectchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}


// call api and delete product
export const actDeleteProductsRequest = (id) => {
    console.log(id)
	return dispatch => {
		return callApi(`products/${id}`, 'DELETE', null)
			.then(res => dispatch(actDeleteProduct(id)));
	}
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

//class api insert data 
export const actAddProductRequest = (product) => {
    return dispath => {
        return callApi('products', 'POST', product)
             .then(res => dispath(actAddProduct(product)))
    }
}

export const actAddProduct = (product)  => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

//class api insert data 
export const actUpdateProductRequest = (product) => {
    return dispath => {
        return callApi('products', 'PUT', product)
             .then(res => dispath(actUpdateProduct(product)))
    }
}

export const actUpdateProduct = (product)  => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}


// display form add 

export const actDisplayFOrm = () => {
    return {
        type: Types.TOGGLE_FORM
    }
}

export const actClouseFOrm = () => {
    return {
        type: Types.CLOUSE_FORM
    }
}
export const actOpenForm = () => {
    return {
        type: Types.OPEN_FORM
    }
}

//get product edit 

export const actEditData = (data) => {
    return {
        type: Types.EDIT_DATA,
        data
    }
}

export const actResetEdit = () => {
    return {
        type: Types.RESET_EDIT,
    }
}

export const actSearch = value => {
    return {
        type: Types.SEARCH,
        value
    }
}

export const actSort = sortText => {
    return {
        type: Types.SORT,
        sortText
    }
}

//reducer

// fetch data 
export const actFetchProducersRequest = () => {
    return (dispatch) => {
        return callApi('producers', 'get', null)

            .then(res => dispatch(actFectchProducers(res.data.producers)))
    }
}

export const actFectchProducers = (producers) => {
    return {
        type: Types.FETCH_PRODUCERS,
        producers
    }
}

//delete
export const actDeletProducersRequest = (id) => {
	return dispatch => {
		return callApi(`producers/${id}`, 'DELETE', null)
			.then(res => dispatch(actDeleteReducer(id)));
	}
}

export const actDeleteReducer = (id) => {
    return {
        type: Types.DELETE_PRODUCER,
        id
    }
}


//class api insert data 
export const actAddProducerRequest = (producer) => {
    return dispath => {
        return callApi('producers', 'POST', producer)
             .then(res => dispath(actAddProducer(producer)))
    }
}

export const actAddProducer = (producer)  => {
    return {
        type: Types.ADD_PRODUCER,
        producer
    }
}

//class api update data 
export const actUpdateProducerRequest = (producer) => {
    return dispath => {
        return callApi('producers', 'PUT', producer)
             .then(res => dispath(actUpdateProducer(producer)))
    }
}

export const actUpdateProducer = (producer)  => {
    return {
        type: Types.UPDATE_PRODUCER,
        producer
    }
}
//CUSTOMERAS

export const actFetchCustomersRequest = () => {
    return (dispatch) => {
        return callApi('customers', 'get', null)

            .then(res => dispatch(actFetchCustomer(res.data.customers)))
    }
}

export const actFetchCustomer = (customers) => {
    return {
        type: Types.FETCH_CUSTOMERS,
        customers
    }
}

// insert customers 

export const actAddCustomerRequest = (customer) => {
    return dispath => {
        return callApi('customers', 'POST', customer)
             .then(res => dispath(actAddCustomer(customer)))
    }
}

export const actAddCustomer = (customer)  => {
    return {
        type: Types.ADD_CUSTOMER,
        customer
    }
}

// updat ecustomer 

export const actUpdateCustomerRequest = (customer) => {
    return dispath => {
        return callApi('customers', 'PUT', customer)
             .then(res => dispath(actUpdateCustomer(customer)))
    }
}

export const actUpdateCustomer = (customer)  => {
    return {
        type: Types.UPDATE_CUSTOMER,
        customer
    }
}

export const actDeleteCustomerRequest = (id) => {
	return dispatch => {
		return callApi(`customers/${id}`, 'DELETE', null)
			.then(res => dispatch(actDeleteCustomer(id)));
	}
}

export const actDeleteCustomer = (id) => {
    return {
        type: Types.DELETE_CUSTOMER,
        id
    }
}

//
export const toggleMenu = () => {
    return {
        type: 'TOGGLE_MENU'
    }
}

export const clouseMenu = () => {
    return {
        type: 'CLOUSE_MENU'
    }
}