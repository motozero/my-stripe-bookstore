import React, { useContext, useEffect, useState} from 'react';
import { withRouter, useParams } from 'react-router-dom';
import Layout from '../../shared/layout';
import { CartContext } from '../../../context/cart-context';

const Success = ({ history }) => {
  const { clearCart, cartItems } = useContext(CartContext);
  const [ chargeId, setChargeId ] = useState("");
  const [ amount, setAmount ] = useState(0);
  let { id } = useParams();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "paymentIntentId": id
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch(process.env.REACT_APP_WEB_SERVER_URL + "/getcharge", requestOptions)
    .then(response => response.json())
    .then(result => {
      
      console.log(result);
      
      setChargeId(result.charges.data[0].id);
    
      setAmount(result.amount);
    
    })
    .catch(error => console.log('error', error));
  
  useEffect(() => {
    if (cartItems.length !==0) { clearCart() }
  }, [clearCart, cartItems]);

  return (
    <Layout>
      <div className='checkout'>
        <h1>Thank you for your order!</h1>
        <p>We are processing your order and will email a confirmation shortly.</p>
        <p>Amount: <b>${(amount/100).toFixed(2)}</b></p>
        <p>Charge ID: <b>{chargeId}</b></p>
        <p>Payment ID: <b>{id}</b></p>
        <div>
          <button className='button is-black nomad-btn submit' 
          onClick={() => history.push('/shop')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Success);
