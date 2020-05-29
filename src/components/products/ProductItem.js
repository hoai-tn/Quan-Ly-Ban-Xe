import React from 'react'
import {ButtonGroup, Button} from 'reactstrap';
import * as Actions from '../../actions/index.action';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ProductItem = (props) => {
    const {product, handleDelete, onOpenForm, onEditProduct} = props;
    const onDelete = () => {
        if(window.confirm('Xóa sản phẩm'+ product.TenHang)) {
            handleDelete(product.MaHang)
        }   
        
    }
    const handleDescription = () => {
        if( product.MoTa && product.MoTa.length > 70) 
            return product.MoTa.slice(0, 70) + '...';
        return product.MoTa
    }
    const onEdit = () => {
        onOpenForm();
        onEditProduct(product);
    }
    return (
       <tr>
           <td>{props.index}</td>
           <td>{product.TenHang}</td>
           <td>{product.SoLuong}</td>
           <td>{product.NhaSX}</td>
           <td> {handleDescription()}</td>
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
        onEditProduct: (product) => {
            dispatch(Actions.actEditData(product))
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductItem)
