import './Header.css';
import logo from '../../assets/logo-clean.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


function Header() {
    const {user} = useAuth()

    return (
        <header className="Header">
            <div className='logoContainer'>
                <a href='https://www.comparaencasa.com/' target="_blank" rel="noopener" >
                    <img className='logo' src={logo} alt='Comparaencasa logo'/>
                </a>
            </div>

            <nav>
                <ul className='linksContainer'>
                    
                    <li className='navBtn'> 
                        <Link to='/' className='link'> 
                            Home 
                            <i className="fa-solid fa-house homeIcn"/> 
                        </Link> 
                    </li>

                    <li className='navBtn'> 
                        <Link to={user ? `/profile/${user.id}` : '/login'} className='link'>
                            {user ? 'My Profile ' : 'Log In '}
                            <i className="fa-solid fa-user-large loginIcn"/>
                        </Link>
                    </li>
                
                </ul>
            </nav>

        </header>
  );
}

export default Header;
