import './connection.scss';
import Button from '../UI/button/button';
import Title from '../UI/title/title';
import SubTitle from '../UI/subTitle/subTitle';
import Description from '../UI/description/description';
import img1 from '../../resources/img/connection1.svg';
import img2 from '../../resources/img/connection2.svg';
import img3 from '../../resources/img/connection3.svg';

const Connection = () => {
    return(
        <div className='connect'>
            <div className='connect__text'>
                <SubTitle mix='left'>How It Works</SubTitle>
                <Title mix='left'>Connecting the Carbon Offset Infrastructure for a More Sustainable World</Title>
                <Description mix='left'>Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster.</Description>
                <div>
                    <Button mix='transp-sm'>Learn More</Button>
                </div>
            </div>
            <div className='connect__items'>
                <ul>
                    <li>
                        <img src={img1} alt='' />
                        <Title mix='item'>Matching the Offset</Title>
                        <Description mix='item'>The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local.</Description>
                    </li>
                    <li>
                        <img src={img2} alt='' />
                        <Title mix='item'>Transaction Transparency</Title>
                        <Description mix='item'>We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset.</Description>
                    </li>
                    <li>
                        <img src={img3} alt='' />
                        <Title mix='item'>Verified Sources</Title>
                        <Description mix='item'>To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects.</Description>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Connection;