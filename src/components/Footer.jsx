import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{width:"100%",height:"250px",}} className='d-flex justify-content-center  align-items-center 
    flex-column mt-5 bg-primary'>
   
   <div className='d-flex justify-content-evenly  align-items-center mb-5 w-100' style={{color:"white"}}>
     
     <div style={{width:"400px",color:"white"}}>
         <h4><i class="fa-solid fa-cart-shopping fa-bounce me-3" style={{color:"white"}}></i>E-KART</h4>
         <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores, blanditiis ullam praesentium, sit enim officia sapiente mollitia culpa totam voluptatum, distinctio hic magnam provident officiis repudiandae nulla tempora nam.</h6>
     </div>

     <div className='d-flex flex-column'>
        <h4>Links</h4>
        <Link to={'/'} style={{color:"white",textDecoration:"none"}}>Home</Link>
        <Link to={'/cart'}  style={{color:"white",textDecoration:"none"}}>Cart</Link>
        <Link to={'/wishlist'}  style={{color:"white",textDecoration:"none"}}>Wish List</Link>
        </div>
        <div className='d-flex flex-column'>
          <h4>Guides</h4>
          <Link to={'https://react.dev/'} target='_blank' style={{textDecoration: 'none', color: 'white'}}>React</Link>
          <Link to={'https://react.dev/'} target='_blank' style={{textDecoration: 'none', color: 'white'}}>React Bootstrap</Link>
          <Link to={'https://react.dev/'} target='_blank' style={{textDecoration: 'none', color: 'white'}}>Boots watch</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter Email Id'/>
            <button className='btn btn-light ms-2'>Subscribe</button>
            </div> 
            <div>
            <div className='d-flex justify-content-evenly mt-3'>
            <Link to={'https://react.dev/'} target='_blank' style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'https://react.dev/'} target='_blank' style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-facebook fa-2x"></i></Link>
            <Link to={'https://react.dev/'} target='_blank' style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-reddit-alien fa-2x"></i></Link>
            <Link to={'https://react.dev/'} target='_blank' style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          </div>
          </div>
          </div>
    </div>
    <p style={{color:'white'}}>Copyright &#169;2024 E-Kart built with React Redux</p>
    </div>
    </>
  )
}

export default Footer