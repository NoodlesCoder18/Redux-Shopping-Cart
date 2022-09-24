import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { NavLink} from 'react-router-dom';


const Cards = () => {

  const [data, setData] = useState(Cardsdata);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Food List</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, index) => {
            // console.log(index);
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }}  className="mx-3 mt-5 card_style"  key={index}>
                <NavLink to={`/products/${element.id}`}  >
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                 </NavLink> 
                  <Card.Body>

                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    {/* <Card.Text>{element.id}</Card.Text> */}
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-6'>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
  
       </div>
  )
}

export default Cards