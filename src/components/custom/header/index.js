import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
    const dispatch = useDispatch();

    const Cart = useSelector((state) => state.Cart);
    const items = Cart.cart.items;

    const openCart = () => {
        dispatch({ type: 'OPEN_CART' });
      }


    return (
        <nav className="navbar navbar-expand-md navbar-light">

            <a className="navbar-brand" href="#!">
                <img src="logo.png" height="30" alt="mdb logo"/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
                aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="waves-effect" href="#!">Shop</a></li>
                <li className="breadcrumb-item"><a className="waves-effect" href="#!">Help</a></li>
                <li className="breadcrumb-item active"><a className="waves-effect" href="#!">Blog</a></li>
            </ol>
        
            <div className="collapse navbar-collapse" id="basicExampleNav1">

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#!" className="nav-link waves-effect">
                        Account
                        </a>
                    </li> 
                    <li className="nav-item">
                        <a href="#!" className="nav-link navbar-link-2 waves-effect">
                            {(items.length > 0) ?  <span className="badge badge-pill red"> {items.length} </span> :  null}
                        <i className="fas fa-shopping-cart pl-0" onClick={openCart}></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="true">
                        <i className="united kingdom flag m-0"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#!">Action</a>
                        <a className="dropdown-item" href="#!">Another action</a>
                        <a className="dropdown-item" href="#!">Something else here</a>
                        </div>
                    </li> 
                </ul>

            </div>
           

        </nav>

    );
}

export default Header;