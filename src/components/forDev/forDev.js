import './forDev.scss';
import Button from '../UI/button/button';
import Title from '../UI/title/title';
import SubTitle from '../UI/subTitle/subTitle';
import Description from '../UI/description/description';
import dev from '../../resources/img/dev.png';

const ForDev = () => {
    return(
        <div className='develop'>
            <div className='develop__text'>
                <SubTitle mix='left'>For Developers, By Developers</SubTitle>
                <Title mix='left-wh'>Simple Integration. <br/> RESTful API.</Title>
                <Description mix='left-wh'>The Cloverly API calculates and offsets carbon emissions on a per-transaction basis. We can determine the amount of carbon emitted and offset that quantity by purchasing carbon offsets in real time. Explore our developer docs to find the right endpoints for your application, and sign up for free to get the Cloverly sandbox keys.</Description>
                <div className='develop__button'>
                    <Button mix='green-wh'>Get API Keys</Button>
                    <Button mix='white-gr'>Developer Docs</Button>
                </div>
            </div>
            <div className='develop__img'>
                <img src={dev} alt='' />
            </div>
        </div>
    )
}

export default ForDev;