import React from 'react'
import {ButtonGroup, Button} from 'reactstrap';
import * as Actions from '../../actions/index.action';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductItem = (props) => {
    const {customer, handleDelete, onOpenForm, onEditProduct} = props;
    const onDelete = () => {
        if(window.confirm('Xóa khách hàng '+ customer.TenKH)) {
            handleDelete(customer.MaKH)
        }   
        
    }
   
    const onEdit = () => {
        onOpenForm();
        onEditProduct(customer);
    }
    return (
       <tr>
           <td>{props.index}</td>
           <td>{customer.TenKH}</td>
           <td>{customer.DiaChi}</td>
           <td>{customer.DienThoai}</td>
           <td> {customer.Email}</td>
           <td>
           <ButtonGroup>
           <Button color="primary" onClick={onEdit } className='px-4'>
           <FontAwesomeIcon icon={faEdit} />
               
            </Button>
                    <Button color="danger" onClick={onDelete}  className='px-4' >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
            </ButtonGroup>
           </td>
       </tr>
    )
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenForm: () => {
            dispatch(Actions.actOpenForm())
        },
        onEditProduct: (customer) => {
            dispatch(Actions.actEditData(customer))
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductItem)
