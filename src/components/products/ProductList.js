import React, {useState} from 'react'
import {Container, Table, Button, Row, Col} from 'reactstrap'
import * as Actions from '../../actions/index.action';
import AddPage from './AddPage';
import {connect} from 'react-redux'
import HandlingData from './HandlingData';

const ProductList = (props) => {
    const {isDisplayForm, toggleForm, onResetEdit} = props;

    const renderForm = () => {
        return isDisplayForm
            ? <AddPage/>
            : '';
    }
    
    const onInsert = () => {
        toggleForm();
        onResetEdit();

    }
    return (
        <Container className='manage-table'>
            <Row>
                <Col>
                    <div className="card">
                        <div className="card-header bg-grey h-30">
                            <h4 className="card-title text-center color-text">
                               Quản lý sản phẩm</h4>
                        </div>
                        <div className="card-body">
                            <div>

                                <Button
                                    className={`w-100 ${isDisplayForm? '': 'bg-success'}`}
                                    onClick={onInsert}>{isDisplayForm? 'Đóng': 'Thêm Sản Phẩm'}</Button>
                                {renderForm()}

                            </div>
                            <HandlingData/>
                            <Table dark hover bordered className="text-center" id="product"  >
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên xe</th>
                                        <th scope="col">
                                            Số lượng</th>
                                        <th scope="col">
                                            Nhà sản xuất
                                        </th>
                                        <th scope="col">
                                            Mô tả</th>
                                        <th scope="col">
                                            Xử Lý</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.children}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {isDisplayForm: state.isDisPlayForm}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleForm: () => {
            dispatch(Actions.actDisplayFOrm())
        },
        onResetEdit: () => {
            dispatch(Actions.actResetEdit())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
