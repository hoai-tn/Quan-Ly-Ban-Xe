import React from 'react'
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
                                Quản Lý Khách Hàng</h4>
                        </div>
                        <div className="card-body">
                            <div>

                                <Button
                                    className={`w-100 ${isDisplayForm? '': 'bg-success'}`}
                                    onClick={onInsert}>{isDisplayForm? 'Đóng': 'Thêm '}</Button>
                                {renderForm()}

                            </div>
                            <HandlingData/>
                            <Table dark hover bordered className="text-center " id="producer">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên Khách Hàng</th>
                                        <th scope="col">
                                            Địa chỉ</th>
                                        <th scope="col">
                                           Điện thoại
                                        </th>
                                        <th scope="col">
                                          Email</th>
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
