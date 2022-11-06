import './map.scss';
import SubTitle from '../UI/subTitle/subTitle';
import Title from '../UI/title/title';
import Description from '../UI/description/description';
import Button from '../UI/button/button';
import img from '../../resources/img/map.png';

const Map = () => {
    return(
        <div className='map'>
            <div className='map__text'>
                <SubTitle mix=''>Cloverly API</SubTitle>
                <Title>
                    Offset Your Carbon Footprint in Real Time
                </Title>
                <Description>
                    Cloverly's powerful API calculates the impact of common carbon-intensive activities in real time and uses verified, quality carbon offset projects to neutralize them. Ready to get started? Create an account to integrate the Cloverly API for free, or contact us for custom solutions.
                </Description>
                <div className='map__button'>
                    <Button mix='green-bl'>Get Started for Free</Button>
                    <Button mix='black-gr'>Let's Talk</Button>
                </div>
            </div>
            <div className='map__img'>
                <img src={img} alt='' />
            </div>
        </div>
    )
}

export default Map;