import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';

const Header = () => {
    return <nav className='header'>
    <Link to="/">
    <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
    
    </Link>

    
 <div className='header_search'>
     
 <input type='text' className='header_searchInput' placeholder/>
 <SearchIcon className='header_searchIcon'></SearchIcon>

 </div> 

 <div className='header__nav'>
    {/* 1st Link */}
    <Link to="/login"  className='header__link'>
    <div className='header__option'>
    <span className='header__optionLineOne'>Hello Rahul</span>
    <span className='header__optionLineTwo'>Sign In</span>
    </div>
    </Link>



    {/* 2nd Link */}
    <Link to="/"  className='header__link'>
    <div className='header__option'>
    <span className='header__optionLineOne'>Returns</span>
    <span className='header__optionLineTwo'>$ Orders</span>
    
    </div>
    </Link>


    {/* 3rd Link */}
    <Link to="/" className='header__link'> 
    <div className='header__option'>
    <span className='header__optionLineOne'>Your</span>
    <span className='header__optionLineTwo'>Prime</span>
    </div>
    </Link>


    {/* 4th Link */}
      <Link to="/checkout" className='header__link'> 
         <div className='header__optionBasket'>
         <ShoppingBasketIcon />
         <span>0</span>
  
         </div>
      </Link>
   
 </div>
   

 </nav>
};

export default Header;