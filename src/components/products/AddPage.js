import React, {Component} from 'react'
import {FormGroup, Form, Label, Input, Button, ButtonGroup} from 'reactstrap'
import { connect } from 'react-redux';
import * as Actions from '../../actions/index.action';
class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MaHang: ''
        }
    }
    componentDidMount() {
        const { editProduct } = this.props;
        this.setState({
            MaHang: editProduct.MaHang,
            TenHang: editProduct.TenHang,
            SoLuong: editProduct.SoLuong,
            NhaSX: editProduct.NhaSX,
            MoTa: editProduct.MoTa
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { editProduct } = nextProps;
        this.setState({
            MaHang: editProduct.MaHang,
            TenHang: editProduct.TenHang,
            SoLuong: editProduct.SoLuong,
            NhaSX: editProduct.NhaSX,
            MoTa: editProduct.MoTa
        })
    }
    onSave = () => {
        const { onClouseForm, onAddProductRequest, editProduct, onUpdateProductRequest } = this.props
        onClouseForm();
        if(!editProduct.MaHang) {
            if(window.confirm(`Thêm sản phẩm ` + this.state.TenHang)) 
              onAddProductRequest(this.state)
        }else {
            if(window.confirm(`Sửa sản phẩm ` + this.state.TenHang)) 
                onUpdateProductRequest(this.state);
        }


    }
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })

    }

    checkNumber = () => {
        if(this.state.SoLuong) {
            // console.log(typeof this.state.SoLuong)
            // if(typeof(this.state.SoLuong) !== 'number')
            //     return 'Dữ liệu kiểu số!'
            return '';
        }
        return 'Chưa nhập dữ liệu';
    }
    render() {
        const { MaHang, TenHang, SoLuong, MoTa, NhaSX } = this.state;
        return (
            <div className="border">
                <Form className="p-5 form-add "  >
                    <h2 className="text-center">{MaHang? 'SỬA SẢN PHẨM': 'THÊM SẢN PHẨM'}</h2>
                    <FormGroup className="ml-auto">
                        <Label className='name-input'>Tên sản phẩm</Label>
                            <Input 
                                onChange={this.onChange}
                                name='TenHang'
                                type='text' 
                                placeholder='Nhập tên sản phẩm'
                                defaultValue={MaHang? TenHang: ''}
                                />
                                <span className="d-block text-center">{TenHang?'': '*Chưa nhập tên hàng'}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label className='name-input'>Số Lượng</Label>
                        <Input 
                             onChange={this.onChange}
                            name='SoLuong'
                            type='text' 
                            placeholder='Nhập tên sản phẩm'
                            defaultValue={MaHang? SoLuong: ''}/>
                          <span className="d-block text-center">{this.checkNumber()}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label className='name-input'>Nhà sản xuất</Label>
                      <Input 
                            onChange={this.onChange}
                            name='NhaSX'
                            type='text' 
                            placeholder='Nhập tên sản phẩm'
                            defaultValue={MaHang? NhaSX: ''}/>
                              <span className="d-block text-center">{NhaSX?'': '*Chưa nhập nhà sản xuất'}</span>
                    </FormGroup>
                    <FormGroup>
                        <Label className='name-input'>Mô tả</Label>
                        <textarea 
                             onChange={this.onChange}
                            name='MoTa'
                            type='text' 
                            rows='4' 
                            defaultValue={MaHang? MoTa: ''}/>
                              <span className="d-block text-center">{MoTa?'': '*Chưa nhập mô tả'}</span>
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
        editProduct: state.editData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClouseForm: () => {
            dispatch(Actions.actClouseFOrm());
        },
        onAddProductRequest: (product) => {
            dispatch(Actions.actAddProductRequest(product))
        },
        onUpdateProductRequest: (propduct) => {
            dispatch(Actions.actUpdateProductRequest(propduct))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPage)
