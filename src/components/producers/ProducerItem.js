import React from 'react'
import {ButtonGroup, Button} from 'reactstrap';
import * as Actions from '../../actions/index.action';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductItem = (props) => {
    const {producer, handleDelete, onOpenForm, onEditProduct} = props;
    const onDelete = () => {
        if(window.confirm('Xóa nhà cung cấp '+ producer.TenNCC)) {
            handleDelete(producer.MaNhaCC)
        }   
        
    }
   
    const onEdit = () => {
        onOpenForm();
        onEditProduct(producer);
    }
    return (
       <tr>
           <td>{props.index}</td>
           <td>{producer.TenNCC}</td>
           <td>{producer.DiaChi}</td>
           <td>{producer.DienThoai}</td>
           <td> {producer.Email}</td>
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
        onEditProduct: (producer) => {
            dispatch(Actions.actEditData(producer))
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductItem)
