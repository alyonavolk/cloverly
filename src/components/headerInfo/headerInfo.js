import './headerInfo.scss';
import Button from '../UI/button/button';
import Title from '../UI/title/title';
import SubTitle from '../UI/subTitle/subTitle';
import Description from '../UI/description/description';
import img1 from '../../resources/img/helping_code.png';
import img2 from '../../resources/img/helping_score.png';
import img3 from '../../resources/img/helping_tab.png';
import img4 from '../../resources/img/helping_tel.png';
import comp1 from '../../resources/img/looker.png';
import comp2 from '../../resources/img/shopify.png';
import comp3 from '../../resources/img/sustain.png';
import comp4 from '../../resources/img/techCrunch.png';
import comp5 from '../../resources/img/bigCommerce.png';


const HeaderInfo = () => {

    return(
        <div className='header-info'>
            <div className='header-info__block'>
                <div className='header-info__text'>
                    <SubTitle mix='link'>
                        Sustainability on Demand
                    </SubTitle>
                    <Title mix='white'>
                        Helping the World Go Carbon Neutral
                    </Title>
                    <Description mix='white'>
                        Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more.
                    </Description>
                    <div className='header-info__btn'>
                        <Button mix='white'>Get Started</Button>
                        <Button mix='black'>Let's Talk</Button>
                    </div>
                </div>
                <div className='header-info__img'>
                    <div className='header-info__img_left'>
                        <img src={img4} alt='' className='header-info__img_left_up' />
                        <img src={img2} alt='' className='header-info__img_left_down' />
                    </div>
                    <div className='header-info__img_right'>
                        <img src={img1} alt='' className='header-info__img_right_up' />
                        <img src={img3} alt='' className='header-info__img_right_down' />
                    </div>
                </div>
            </div>
            <div className='header-info__comp'>
                <div><img src={comp1} alt='' /></div>
                <div><img src={comp2} alt='' /></div>
                <div><img src={comp3} alt='' /></div>
                <div><img src={comp4} alt='' /></div>
                <div><img src={comp5} alt='' /></div>
            </div>
        </div>
    )
}

export default HeaderInfo;