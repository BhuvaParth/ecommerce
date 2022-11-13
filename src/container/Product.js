import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addproductdata, addtocart, cartgetproduct, } from '../Redux/Action/cart.action';

function Product(props) {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    // const carthandle = () => {
    //      const data = {
    //          name : "ProductName",
    //          price : "300",
    //          image : "images/p1.png"
    //      }
    //      dispatch(data)
    // }
    // const decrement = () => {
    //     dispatch(removetocart())
    // }

    // const empty = () => {
    //     dispatch(emptytocart())
    // }

    return (
        <div>
            {/* <section className="product_section layout_padding">
                <div className="container">
                </div>
            </section> */}
            {/* end product section */}
            {/* info section */}
            <section className="info_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info_contact">
                                <h5>
                                    <a href className="navbar-brand">
                                        <span>
                                            Minics
                                        </span>
                                    </a>
                                </h5>
                                <p>
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                    Address
                                </p>
                                <p>
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    +01 1234567890
                                </p>
                                <p>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    demo@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_info">
                                <h5>
                                    Information
                                </h5>
                                <p>
                                    Eligendi sunt, provident, debitis nemo, facilis cupiditate velit libero dolorum aperiam enim nulla iste maxime corrupti ad illo libero minus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_links">
                                <h5>
                                    Useful Link
                                </h5>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="product.html">
                                            Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="why.html">
                                            Why Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="testimonial.html">
                                            Testimonial
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_form ">
                                <h5>
                                    Newsletter
                                </h5>
                                <form action>
                                    <input type="email" placeholder="Enter your email" />
                                    <button>
                                        Subscribe
                                    </button>
                                </form>
                                <div className="social_box">
                                    <a href>
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-youtube" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Product;