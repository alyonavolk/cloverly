import './header.scss';
import logo from '../../resources/img/logo.svg';
import Button from '../button/button';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <div className='header__logo'>
                    <img className='' src={logo} alt=''/>
                </div>
                <div className='header__link'>
                    <ul>
                        <li><a>Product</a></li>
                        <li><a>Use Cases</a></li>
                        <li><a>Developers</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className='header__registr'>
                <p><a>Login</a></p>
                <Button nameBtn='Get API Keys' />
            </div>
        </div>
    )
}

export default Header;