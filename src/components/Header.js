
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { useAuth } from "./auth";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/esm/Table';
import Menu from '@mui/material/Menu';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';
import Badge from '@mui/material/Badge';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import RequireAuth from "./RequireAuth";

function Header() {

  const [price,setPrice] = useState(0);
  // console.log(price);

      const getdata = useSelector((state)=> state.cartreducer.carts);
      // console.log(getdata);

      const dispatch = useDispatch();
const auth=useAuth();
const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

 
  const dlt = (id)=>{
      dispatch(DLT(id))
  }


  const total = ()=>{
      let price = 0;
      getdata.map((ele,k)=>{
          price = ele.price * ele.qnty + price
      });
      setPrice(price);
  };

  useEffect(()=>{
      total();
  },[total])

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <>
  
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            
          <NavLink to="/" className="text-decoration-none mx-3">FOODIE</NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 FOODIE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 mx-3">
                <NavLink to="/" className="text-decoration-none px-2">Home</NavLink>
                {!auth.user &&
        <NavLink style={navLinkStyles} className="text-decoration-none" to="/login">
          Login
        </NavLink>
      }

   
  
      {/* <NavLink style={navLinkStyles} className="text-decoration-none" to="/login">Login</NavLink> */}
      <NavLink style={navLinkStyles} className="text-decoration-none px-2" to="/profile">Profile</NavLink>

      {/* <NavLink style={navLinkStyles} className="text-decoration-none" to="/login"><button onClick={handleLogout}>Logout</button></NavLink> */}
    
                </Nav>
               
                <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >                      
                        <AiOutlineShoppingCart></AiOutlineShoppingCart>                       
                    </Badge>
                   
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          
          <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                {/* <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total :₹ {price}</p>
                                </tbody>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

                </Menu>
        </Navbar>
      ))}
    </>
  );
}

export default Header;