import Header from '../header/header';
import './headerInfo.scss';
import Button from '../button/button';

const HeaderInfo = () => {

    return(
        <div className='header-info'>
            <div className='header-info__block'>
                <div className='header-info__text'>
                    <p className=''>
                        Sustainability on Demand
                    </p>
                    <h1 className='header-info__title'>
                        Helping the World Go Carbon Neutral
                    </h1>
                    <p className='header-info__descr'>
                        Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more.
                    </p>
                    <div className='header-info__btn'>
                        <Button nameBtn='Get Started' />
                        <Button nameBtn="Let's Talk" />
                    </div>
                </div>
                <div className='header-info__img'>
                    <div className='header-info__img_left'>

                    </div>
                    <div className='header-info__img_right'>
                        
                    </div>
                </div>
            </div>
            <div className='header-info__comp'>

            </div>
        </div>
    )
}

export default HeaderInfo;