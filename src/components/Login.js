import React, {Component} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Col } from 'reactstrap';
import * as actions from '../actions/index.action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            userNameError: '',
            passwordError: ''
        }
    }
    componentDidMount() {
        this.props.fetchLogin();
    }
	onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
    }

	onSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = this.state;
        const { loginText } = this.props;
        this.setState({
            userNameError: userName ? '': 'Chưa nhập tài khoản',
            passwordError: password ? '': 'Chưa nhập mật khẩu',
        })
        
        loginText.map(item => {
            if(item.taikhoan === userName && item.pass === password ) {
                localStorage.setItem('user', JSON.stringify({
                    userName, password, isLogin: true
                }))
                return;
            }
            
        });
        
        

	}
    render() {
        const loginUser = localStorage.getItem('user');
        const { userNameError, passwordError} = this.state;
        if(loginUser) {
            const { location, onLogin } = this.props;
            onLogin();
            return <Redirect to={{
                pathname: '/',
                state: {
                    from: location
                }
            }}/>
        }
        return (
            <Col className="mt-20 ">
					<Form className="form w-50 mx-auto bg-login p-4" 
						 onSubmit ={this.onSubmit}>
						<h2 className="text-center">Quản lý sản phẩm</h2>
                        <FormGroup>
                            <Label>user name</Label>
                            <Input
								onChange={this.onChange}
                                type="text"
                                name="userName"
                                id="exampleEmail"
                                placeholder="Enter user name"/>
                            <p> {userNameError} </p>
                        </FormGroup>

                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
								onChange={this.onChange}
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"/>
                            <p> {passwordError} </p>
                        </FormGroup>
                        <Button className="w-100">Login</Button>
                    </Form>
                </Col>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        loginText: state.loginText
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchLogin: () => dispatch(actions.actFetchLoginRequest())
        ,
        onLogin: () => {
            dispatch(actions.actLogin())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
