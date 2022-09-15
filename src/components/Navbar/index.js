import Style from './Navbar.module.css';
import shoppingIcon from '../../assets/shopping-icon.svg'


const Navbar = () =>{
    return (
      <nav className={Style.nav}>
        <img className={Style.navIcon} src={shoppingIcon} alt="shopping Icon"/>
        <h1 className={Style.navTitle}>Listing Counter App</h1>
      </nav>
    )
}

export default Navbar