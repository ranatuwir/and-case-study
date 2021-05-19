import { Link } from 'react-router-dom';
import style from './Header.module.css'
import { BsBag } from 'react-icons/bs';
import {AiOutlineQuestion} from 'react-icons/ai'
import {BiStore} from 'react-icons/bi'



const Header = () => {
    return (
    <div className={style.header}>
    <div className={style.logo}>
      <Link to="/" style={{ textDecoration: 'none' }}>Golden Shoes</Link>
    </div>
    <div className={style.li}>
      <Link to="/" className={style.icon}><BiStore /></Link>
      <Link to="/faq" className={style.icon}><AiOutlineQuestion /></Link>
      <Link to="/cart" className={style.icon}><BsBag /></Link>
    </div>
    </div>
    );
  };
  
  export default Header;