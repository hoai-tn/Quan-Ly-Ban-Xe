import React, {useState} from 'react';
import { Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFileExport} from '@fortawesome/free-solid-svg-icons';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  

const HandlingData = (props) => {
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ sort, setSort ] = useState({by:'name', value: 1});
    
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const onChange = e => {
        props.getTextSearch(e.target.value);
    }
    const onClick = (name, value) => {
        setSort({
            by: name,
            value: value
        });

        props.getTextSort({
            by: name,
            value: value
        });
    }
    return (
        <div className='py-3 border'>
            <Input
                className='w-25 d-inline ml-4'
                type='text'
                placeholder='Tìm kiếm theo tên'
                onChange={onChange}/>
            <Dropdown 
                className='d-inline ml-5'
                isOpen={dropdownOpen}
                
                toggle={toggle}>
                <DropdownToggle caret  color='warning'>
                    Xắp xếp
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Theo tên</DropdownItem>
                    <DropdownItem 
                        onClick={() => onClick('name', 1)}>
                        <span>A -> Z </span>   
                        {(sort.by === 'name' && sort.value === 1) && <FontAwesomeIcon icon={faCheck} className='ml-4'/>} 
                    </DropdownItem>
                    <DropdownItem 
                         onClick={() => onClick('name', -1)} >
                        <span> Z -> A </span>
                        {(sort.by === 'name' && sort.value === -1) && <FontAwesomeIcon icon={faCheck} className='ml-4'/>} 
                    </DropdownItem>
                   
                    <DropdownItem header>Theo số Lượng</DropdownItem>
                    <DropdownItem 
                        onClick={() => onClick('amout', 1)} >
                            <span>Tăng</span>
                            {(sort.by === 'amout' && sort.value === 1) && <FontAwesomeIcon icon={faCheck} className='ml-4'/>} 
                    </DropdownItem>
                    <DropdownItem 
                        onClick={() => onClick('amout', -1)} >
                            <span>Giảm</span>
                            {(sort.by === 'amout' && sort.value === -1) && <FontAwesomeIcon icon={faCheck} className='ml-4'/>} 
                    </DropdownItem>
                    
                </DropdownMenu>
                <ReactHTMLTableToExcel  
                    className="btn btn-info ml-4"  
                    table="product"  
                    filename="ReportExcel"  
                    sheet="Sheet"  
                    buttonText="Xuất excel" >   
                </ReactHTMLTableToExcel> 
            </Dropdown>
        </div>
    );
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTextSearch: (value) => {
            dispatch(Actions.actSearch(value))
        },
        getTextSort: value => {
            dispatch(Actions.actSort(value))
        }
    }
}
export default connect(null, mapDispatchToProps)(HandlingData)
