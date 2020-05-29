import { combineReducers } from 'redux';
import loginText from './Login/LoginReducer';
import products from './manageProduct/mngProduct.reducer';
import isDisPlayForm from './display/displayForm.reducer';
import editData from './editData.reducer';
import isLogin from './Login/isLogin.reducer';
import searchText from './search.reducer';
import sortText from './sort.reducer';
import producers from './manageProducers/mngProducer.reducer';
import customers from './manageCustomers/mngCustomer.reducer'
import toggleMenu from './togglemenu/ToggleMenu';
const appReducer = combineReducers({
    loginText,
    isLogin,
    products,
    isDisPlayForm,
    editData,
    searchText,
    sortText,
    producers,
    customers,
    toggleMenu,
});

export default appReducer;  