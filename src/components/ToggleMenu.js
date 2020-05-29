import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import * as actions from '../actions/index.action';
const ToggleMenu = ({toggle}) => {
  const handleClick = () => {
    toggle();
  }
  return (
    <FontAwesomeIcon
        onClick={ handleClick }
       icon={faBars} 
       style={{
          fontSize: '30px',
          cursor: 'pointer',
          margin: '10px 1px 0px 20px'

    }}>
    </FontAwesomeIcon>
  )
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggle: () => {
      dispatch(actions.toggleMenu());
    }
  }
}
export default connect(null, mapDispatchToProps)(ToggleMenu)