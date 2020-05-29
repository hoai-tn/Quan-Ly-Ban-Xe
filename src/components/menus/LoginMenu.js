import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index.action';
const LoginMenu = ({isLogin, onLogout}) => {
  const getItem = localStorage.getItem('user');

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState('Tài Khoản');
  const [login, setLogin] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem('user'));
    if(getUser)
      setUser(getUser.userName);
      setLogin(true)
  });

  const handlleLogout = () => {
      setLogin(true);
      onLogout();
      setUser('Tài Khoản');
      localStorage.removeItem('user');
  }


  return (
    <Dropdown 
      isOpen={dropdownOpen} 
      toggle={toggle}
      className='drop-user'
    >
      
      <DropdownToggle caret>
      <FontAwesomeIcon icon={faUser} className='mr-3  '/>
        {user}
        </DropdownToggle>
        
      <DropdownMenu >
       {
         login? (
          <>
            <DropdownItem>
              Thông Tin
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Đổi mật khẩu</DropdownItem>
            <DropdownItem>Cài đặt</DropdownItem>
            <DropdownItem onClick={handlleLogout}>Đăng xuất</DropdownItem>
          </>
      ): (
        <DropdownItem>
        Đăng Nhập
      </DropdownItem>
      )
       }

      </DropdownMenu>
    </Dropdown>
  );
}



const mapStateToProps = (state, ownProps) => {
  return {
      isLogin: state.isLogin
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogout: () => {
            dispatch(Actions.actLogout())
        }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginMenu)