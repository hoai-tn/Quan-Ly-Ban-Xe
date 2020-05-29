import React from 'react';

import './App.css';
import Menu from './components/menus';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from './routes';
import { connect } from 'react-redux';
import * as actions from './actions/index.action';
function App({isToggleMenu, onClouseMenu }) {
    const showPage = () => {
        let result = null;
        if (routes.length) {
            result = routes.map((route, index) => {
                return <Route
                  
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}/>
            })
        }
        return <Switch >
            {result}
            </Switch>
    }
    return (
        <div>
            <Router>
                <Menu/> 
                <div style={{
                    opacity: isToggleMenu?'0.3':'1',
                    transition: 'all ease 1s'
                }}
                onClick={() => onClouseMenu()}
                >
                {showPage()}
                </div>
            </Router>

        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        isToggleMenu: state.toggleMenu
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClouseMenu: () => {
            dispatch(actions.clouseMenu())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

