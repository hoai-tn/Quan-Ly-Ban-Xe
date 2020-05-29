import React, {Component} from 'react'
import {FormGroup, Form, Label, Input, Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux';
import * as Actions from '../../actions/index.action';
class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MaNhaCC: ''
        }
    }
    componentDidMount() {
        const { editData } = this.props;
        this.setState({
            MaNhaCC: editData.MaNhaCC, 
            TenNCC: editData.TenNCC,
            DiaChi: editData.DiaChi, 
            DienThoai: editData.DienThoai, 
            Email: editData.Email
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { editData } = nextProps;
        this.setState({
            MaNhaCC: editData.MaNhaCC, 
            TenNCC: editData.TenNCC,
            DiaChi: editData.DiaChi, 
            DienThoai: editData.DienThoai, 
            Email: editData.Email
        })
    }
    onSave = () => {
        const { onClouseForm, onAddProducerRequest, 
            editData, onUpdateProducerRequest } = this.props
        onClouseForm();
        if(!editData.MaNhaCC) {
            if(window.confirm(`Thêm nhà cung cấp ` + this.state.TenNCC)) 
            onAddProducerRequest(this.state)
        }else {
            if(window.confirm(`Sửa nhà cung cấp ` + this.state.TenNCC)) 
            onUpdateProducerRequest(this.state);
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
        const { MaNhaCC, TenNCC, DiaChi, DienThoai, Email } = this.state;
        return (
            <div className="border">
                <Form className="p-5 form-add "  >
                    <h2 className="text-center">{MaNhaCC? 'Sửa Nhà Cung Cấp': 'Thêm Nhà Cung cấp'}</h2>
                    <FormGroup className="ml-auto">
                        <Label className='name-input'>Tên nhà cung cấp</Label>
                            <Input 
                                onChange={this.onChange}
                                name='TenNCC'
                                type='text' 
                                placeholder='Nhập tên nhà cung cấp'
                                defaultValue={MaNhaCC? TenNCC: ''}
                                />
                                <span className="d-block text-center">{TenNCC ?'': '*Chưa nhập tên Nhà cung cấp'}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label className='name-input'>Địa chỉ</Label>
                        <Input 
                             onChange={this.onChange}
                            name='DiaChi'
                            type='text' 
                            placeholder='Nhập địa chỉ'
                            defaultValue={MaNhaCC? DiaChi: ''}/>
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
                            defaultValue={MaNhaCC? DienThoai: ''}/>
                              <span className="d-block text-center">{DienThoai?'': '*Chưa nhập điện thoại'}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label className='name-input'>Email</Label>
                        <Input 
                            onChange={this.onChange}
                            name='Email'
                            type='email' 
                            defaultValue={MaNhaCC? Email: ''}
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
        onAddProducerRequest: (producer) => {
            dispatch(Actions.actAddProducerRequest(producer))
        },
        onUpdateProducerRequest: (producer) => {
            dispatch(Actions.actUpdateProducerRequest(producer))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPage)
