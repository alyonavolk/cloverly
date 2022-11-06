import './partner.scss';
import Button from '../UI/button/button';
import SubTitle from '../UI/subTitle/subTitle';
import Description from '../UI/description/description';
import back from '../../resources/img/partners.png';
import soc from '../../resources/img/google_looker.png';

const Partner = () => {
    return(
        <div className='partner'>
            <div className='partner__img'>
                <img src={back} alt='' />
            </div>
            <div className='partner__info'>
                <SubTitle mix='left'>Partner Spotlight</SubTitle>
                <div className='partner__info_begin'><span className='partner__info_begin-cl'>At the JOIN data conference,</span> the team from Looker (now part of Google) used data provided by attendees to determine the carbon footprint of their travel to the conference and offset it with Cloverly.</div>
                <p className='partner__arrow'>“ ”</p>
                <Description mix='big'>
                    We built a little Javascript application to let you select how much of your carbon footprint you wanted to offset and then got an estimated price via Cloverly, which provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs you're purchasing will come from, we approved the purchase and executed it via the API.
                </Description>
                <p className='partner__info_link'>Read Full Story</p>
                <div className='partner__other'>
                    <div><img src={soc} alt='' /></div>
                    <div>
                        <p>Daniel Mintz</p>
                        <p>Chief Data Evangelist at Looker</p>
                    </div>
                </div>
                <Button mix='transparent'>More Partners</Button>
            </div>
        </div>
    )
}

export default Partner;