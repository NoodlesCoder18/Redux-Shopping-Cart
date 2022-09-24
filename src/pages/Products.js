import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from '../components/CardsData';
import {  useParams } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { ADD } from '../redux/actions/action';
import '../components/Login.css'

const Products = () => {


  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e)=>{
    dispatch(ADD(e));
  }


  const {id} = useParams();

  
  const compare = () => {
    let comparedata = data.filter((e)=>{     
      console.log(e);
      return e.id == id
    });   
    setData(comparedata);
  }
  
  useEffect(()=>{
    compare();
  },[id])

 
  return (
    <>    
        <div className='container mt-3'>
      <h2 className='text-center'>Food List</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element) => {
            
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }}  className="mx-2 mt-4 card_style">
                
                  <Card.Img variant="top" className='hover-zoom mt-3' src={element.imgdata} style={{height:"16rem"}} />
               
                  <Card.Body>

                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                   
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
      </div>
    </div>

    </>
  )
}

export default Products