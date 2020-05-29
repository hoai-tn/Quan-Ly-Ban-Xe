import React, {Component} from 'react'
import {FormGroup, Form, Label, Input, Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux';
import * as Actions from '../../actions/index.action';
class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MaKH: ''
        }
    }
    componentDidMount() {
        const { editData } = this.props;
        this.setState({
            MaKH: editData.MaKH, 
            TenKH: editData.TenKH,
            DiaChi: editData.DiaChi, 
            DienThoai: editData.DienThoai, 
            Email: editData.Email
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { editData } = nextProps;
        this.setState({
            MaKH: editData.MaKH, 
            TenKH: editData.TenKH,
            DiaChi: editData.DiaChi, 
            DienThoai: editData.DienThoai, 
            Email: editData.Email
        })
    }
    onSave = () => {
        const { onClouseForm, onAddCustomerRequest, 
            editData, onUpdateCustomerRequest } = this.props
        onClouseForm();
        if(!editData.MaKH) {
            if(window.confirm(`Thêm Khách hàng ` + this.state.TenKH)) 
                 onAddCustomerRequest(this.state)
        }else {
            if(window.confirm(`Sửa Khách hàng ` + this.state.TenKH)) 
            onUpdateCustomerRequest(this.state);
        }

    }
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })

    }

 
    render() {
        const { MaKH, TenKH, DiaChi, DienThoai, Email } = this.state;
        return (
            <div className="border">
                <Form className="p-5 form-add "  >
                    <h2 className="text-center">{MaKH? 'Sửa khách hàng': 'Thêm khách hàng'}</h2>
                    <FormGroup className="ml-auto">
                        <Label className='name-input'>Tên nhà khách hàng</Label>
                            <Input 
                                onChange={this.onChange}
                                name='TenKH'
                                type='text' 
                                placeholder='Nhập tên khách hàng '
                                defaultValue={MaKH? TenKH: ''}
                                />
                                <span className="d-block text-center">{TenKH?'': '*Chưa nhập tên khách hàng'}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label className='name-input'>Địa chỉ</Label>
                        <Input 
                             onChange={this.onChange}
                            name='DiaChi'
                            type='text' 
                            placeholder='Nhập địa chỉ'
                            defaultValue={MaKH? DiaChi: ''}/>
                          <span className="d-block text-center">
                            {DiaChi?'': '*Chưa nhập địa chỉ'}
                          </span>
                    </FormGroup>
                    <FormGroup>
                        <Label className='name-input'>Điện thoại</Label>
                      <Input 
                            onChange={this.onChange}
                            name='DienThoai'
                            type='text' 
                            placeholder='Nhập điên thoại'
                            defaultValue={MaKH? DienThoai: ''}/>
                              <span className="d-block text-center">{DienThoai?'': '*Chưa nhập điện thoại'}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label className='name-input'>Email</Label>
                        <Input 
                            onChange={this.onChange}
                            name='Email'
                            type='email' 
                            defaultValue={MaKH? Email: ''}
                            placeholder='Nhập email nhà cung cấp'/>
                              <span className="d-block text-center">{Email?'': '*Chưa nhập email'}</span>
                    </FormGroup>
                    <ButtonGroup className="d-block text-center">
                        <Button 
                            color='success'
                            type='submit'
                            className="px-5 mr-3" 
                            onClick={this.onSave}> Lưu</Button>
                        <Button className="px-4" type='reset'>Làm mới</Button>
                    </ButtonGroup>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editData: state.editData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClouseForm: () => {
            dispatch(Actions.actClouseFOrm());
        },
        onAddCustomerRequest: (customer) => {
            dispatch(Actions.actAddCustomerRequest(customer))
        },
        onUpdateCustomerRequest: (customer) => {
            dispatch(Actions.actUpdateCustomerRequest(customer))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPage)
