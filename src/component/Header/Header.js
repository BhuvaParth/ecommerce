import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LogoutUser } from '../../Redux/Action/auth.Action';
import Alert from '../Alert/Alert';


function Header(props) {

    const auth = useSelector(state => state.auth)
    // console.log(auth);

    // const cart = useSelector(state => state.cart)
    // console.log(cart);
    // console.log(categorys);

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(LogoutUser())
        // console.log("Logout");
    }

    return (
        <header className="header_section">
            <div className="header_bottom">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                        <img src="images/e-commerce-business-company-logo-8E5010F4E3-seeklogo.com.png" alt width={50}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <NavLink exact to={"/"} className="nav-link text-dark" href="index.html">Home <span className="sr-only">(current)</span></NavLink>
                                    {/* <NavLink exact to={"/Home"} ClassName="nav-link scrollto active">Home</NavLink> */}
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="about.html"> About</a> */}
                                    <NavLink exat to={"/About"} className="nav-link text-dark" href="about.html"> About</NavLink>
                                </li>
                                <li className="dropdown">
                                    {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                    <NavLink exact to={"/Category"} className="nav-link text-dark" href="Category.html">Category</NavLink>
                                    <ul className='dropdown-content'>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Categoriesadmin"} className="nav-link text-dark" href="Categoriesadmin.html">Categoriesadmin</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Productadmin"} className="nav-link text-dark" href="Productadmin.html">Productadmin</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Productdetails"} className="nav-link text-dark" href="Productdetails.html">Productdetails</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Cart"} className="nav-link text-dark" href="Cart.html">Cart</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Placeorder"} className="nav-link text-dark" href="Cart.html">Placeorder</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Orderadmin"} className="nav-link text-dark" href="Orderadmin.html">Orderadmin</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="product.html">Products</a> */}
                                    <NavLink exact to={"/Product"} className="nav-link text-dark" href="product.html">Product</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="why.html">Why Us</a> */}
                                    <NavLink exact to={"/Why"} className="nav-link text-dark" href="why.html">Why Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                    <NavLink exact to={"/Testimonial"} className="nav-link text-dark" href="testimonial.html">Testimonial</NavLink>
                                </li>

                                {
                                    auth.user === null ?
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Logins"} className="nav-link text-dark" href="Loginss.html">Logins</NavLink>
                                        </li> :
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink onClick={() => handleLogout()} exact to={"/Logins"} className="nav-link" href="Loginss.html">Logout</NavLink>
                                        </li>
                                }
                            </ul>
                        </div>
                        <Alert />
                    </nav>
                </div>
            </div>
        </header>

    );
}

export default Header;

