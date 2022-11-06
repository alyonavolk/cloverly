import './footer.scss';
import Button from '../UI/button/button';
import logo from '../../resources/img/logo-wh.svg';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer__logo'>
                <div><img src={logo} alt='' /></div>
                <div>
                    <p>Login</p>
                    <Button mix='footer'>Get API Keys</Button>
                </div>
            </div>
            <div className='footer__link'>
                <ul>
                    <li className='footer__link_title'>Product</li>
                    <li>Emission Calculations</li>
                    <li>Diverse Offset Portfolio</li>
                    <li>Matching the Offset</li>
                    <li>Transparent Reporting</li>
                    <li>Flexible API Integration</li>
                    <li>Verified Carbon Offsets</li>
                </ul>
                <ul>
                    <li className='footer__link_title'>Use Cases</li>
                    <li>Ecommerce</li>
                    <li>Rideshare</li>
                    <li>Flights</li>
                    <li>Enterprise Resource Planning</li>
                    <li>Energy</li>
                    <li>Supply Chain</li>
                    <li>Fintech</li>
                    <li>Fleet</li>
                </ul>
                <ul>
                    <li className='footer__link_title'>Developers</li>
                    <li>API Docs</li>
                    <li>Ask Cloverly</li>
                </ul>
                <ul>
                    <li className='footer__link_title'>About</li>
                    <li>How It Works</li>
                    <li>Offset Projects</li>
                    <li>Partners</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>News & Press</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Careers</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer__date'>
                <p>&copy; 2020 Cloverly</p>
            </div>
        </div>
    )
}

export default Footer;