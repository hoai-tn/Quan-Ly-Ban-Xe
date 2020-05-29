import React from 'react'
import { connect} from 'react-redux';
import classNames from 'classnames';
import * as actions from '../../actions/index.action';
import {NavLink} from 'react-router-dom';
import { Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTruckMoving, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
const LeftSession = ({isToggleMenu, toggle}) => {
  //'left_session left_sidebar--hidden'
  const handleClick = () => {
    toggle();
  }
  return (
    <div className={classNames('left_session', isToggleMenu?'left_sidebar--show': 'left_sidebar--hidden')} >
      <div className='left_session__towrapper'  onClick={ handleClick }> 
        X
      </div>
      <div className='text-center mt-5 logo-nav'>
        <img  src='https://mdbootstrap.com/img/logo/mdb-transparent.png' width='200px'/>
      </div>
      <div className='left_sidebar'>
        <Nav style={{
          marginTop: '60px'
        }}>
          <NavLink className='link'  exact={true} activeClassName='is-active' to='/'>
            <FontAwesomeIcon icon={faShoppingBag} className='mr-3'/>
            sản phẩm</NavLink>
          <NavLink className='link' activeClassName='is-active' to='/producers'>
            <FontAwesomeIcon icon={faTruckMoving} className='mr-3'/>
            Nhà Cung cấp</NavLink>
          <NavLink className='link' activeClassName='is-active' to='/customers'>
          <FontAwesomeIcon icon={faUsers} className='mr-3'/>
            Khách hàng</NavLink>
        </Nav>
      </div>

    </div>
  )
}
const mapStateToProps = ({toggleMenu}) => ({ isToggleMenu: toggleMenu});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggle: () => {
      dispatch(actions.toggleMenu());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftSession)
