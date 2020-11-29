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
        <nav class="navbar navbar-expand-md navbar-light">

            <a class="navbar-brand" href="#!">
                <img src="logo.png" height="30" alt="mdb logo"/>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
                aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="waves-effect" href="#!">Shop</a></li>
                <li class="breadcrumb-item"><a class="waves-effect" href="#!">Help</a></li>
                <li class="breadcrumb-item active"><a class="waves-effect" href="#!">Blog</a></li>
            </ol>
        
            <div class="collapse navbar-collapse" id="basicExampleNav1">

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#!" class="nav-link waves-effect">
                        Account
                        </a>
                    </li> 
                    <li class="nav-item">
                        <a href="#!" class="nav-link navbar-link-2 waves-effect">
                            {(items.length > 0) ?  <span class="badge badge-pill red"> {items.length} </span> :  null}
                        <i class="fas fa-shopping-cart pl-0" onClick={openCart}></i>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="true">
                        <i class="united kingdom flag m-0"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                        </div>
                    </li> 
                </ul>

            </div>
           

        </nav>

    );
}

export default Header;