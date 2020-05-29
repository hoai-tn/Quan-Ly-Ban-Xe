import React from 'react';
import ProducerListPage from './pages/ProducerListPage';
import ProductListPage from './pages/ProductListPage';
import NotFoundPage from './pages/NotFoundPage';
import Login from './components/Login';
import  CustomerListPage  from './pages/CustomerListPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <ProductListPage/>
    },
    {
        path: '/producers',
        exact: false,
        main: () => <ProducerListPage/>
    },
    {
        path: '/customers',
        exact: false,
        main: () => <CustomerListPage/>
    },
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location = {location}/>
    },
    {
		path: '',
		exact: false,
		main: () => <NotFoundPage/>
	}
]


export default routes;