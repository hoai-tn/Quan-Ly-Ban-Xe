import React, {Component} from 'react';
import * as Actions from '../actions/index.action';
import { Route , Link, Redirect } from 'react-router-dom';
import logoBmw from './bmw.jpg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,	
    NavbarText
} from 'reactstrap';
import { connect } from 'react-redux';

class Menu extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            isOpen: false,
            isLogin: false
        }
    }
    componentDidMount() {
        this.setState({
            isLogin: this.props.isLogin
        })
        
    }
    componentWillReceiveProps(nextProps) {
        const { isLogin } = nextProps;
        this.setState({
            isLogin: isLogin
        });
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    showMenu = () => {
        const menus = [
            {
                name: 'Sản phẩm',
                to: '/',
                exact: true
            },
            {
                name: 'Nhà cung cấp',
                to: '/producers',
                exact: false
            },
            {
                name: 'Khách hàng',
                to: '/customers',
                exact: false
            },
        ]
        let result = null;
        if(menus.length) {
            result = menus.map((menu, index) => {
                return(
                    <div className='d-flex'>
                        <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        className='active d-block'
                        activeOnlyWhenExact={menu.exact}
                />
                <div className='d-block' style={{
                    marginTop: '8px'
                }}> > </div>
                </div>
                )
            })
        }
        return result;
    }
    onChageLogin = () => {
        const {onLogout} = this.props;
        const local = localStorage.getItem('user');
        if(local || this.state.isLogin) {
            onLogout();
            localStorage.removeItem('user')
        }
    }
    render() {
        return (
            <div>
            <Navbar  light expand="md" className='d-block'>
                {/* <NavbarBrand href="/">
                    <img src={logoBmw} width='50px'/>
                </NavbarBrand> */}
              
                    <Nav  navbar className='d-block'>
                        { this.showMenu()}
                    </Nav>
                    <NavbarText onClick={() => this.setState({ isOpen: true})}>
                        <NavbarText onClick={this.onChageLogin}> {this.state.isLogin ? 'Logout': 'Login'}</NavbarText>
					</NavbarText>
            </Navbar>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.isLogin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogin: () => {
            dispatch(Actions.actLogin())
        },
        onLogout: () => {
            dispatch(Actions.actLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                let active = match ? 'active' : '';
                return(
                    <NavItem className={active}>
                        <Link to={to} className="nav-link">
                            {label}
                        </Link>
                     </NavItem>
                )
            }}
        />
    );
}
