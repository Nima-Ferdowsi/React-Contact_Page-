import React, { useContext} from 'react';
import Context from '../Context/Context';
import '../css/modal.css'
const Modal = () => {
    const context=useContext(Context)
    

    return (
         <div className='modal'>
         <div className='modal-content'>
         <span onClick={context.hideModal}>X</span>
          <h5>Thanks {context.firstName}</h5>
          <p>We will contact you  soon</p>
         </div>
         </div>
         );
}
 
export default Modal;