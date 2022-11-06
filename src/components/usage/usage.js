import './usage.scss';
import Button from '../UI/button/button';
import Title from '../UI/title/title';
import SubTitle from '../UI/subTitle/subTitle';
import Description from '../UI/description/description';
import ItemUs from '../UI/itemUs/itemUs';

import img1 from '../../resources/img/usage1.svg';
import img2 from '../../resources/img/usage2.svg';
import img3 from '../../resources/img/usage3.svg';
import img4 from '../../resources/img/usage4.svg';
import img5 from '../../resources/img/usage5.svg';
import img6 from '../../resources/img/usage6.svg';
import img7 from '../../resources/img/usage7.svg';
import img8 from '../../resources/img/usage8.svg';

const Usage = () => {
    return (
        <div className='usage'>
            <div className='usage__info'>
                <SubTitle>Use Cases</SubTitle>
                <Title>Used in Every Environment, to Save the Environment</Title>
                <Description>There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting.</Description>
            </div>
            <div className='usage__items'>
                <ul>
                    <li>
                        <ItemUs img={img1} title='Ecommerce' 
                        descr='See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.'/>
                    </li>
                    <li>
                        <ItemUs img={img2} title='Flights' 
                        descr='See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.'/>
                    </li>
                    <li>
                        <ItemUs img={img3} title='Energy' 
                        descr='See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.'/>
                    </li>
                    <li>
                        <ItemUs img={img4} title='Fintech' 
                        descr='See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.'/>
                    </li>
                    <li>
                        <ItemUs img={img5} title='Rideshare' 
                        descr='See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.'/>
                    </li>
                    <li>
                        <ItemUs img={img6} title='Enterprise Resource Planning' 
                        descr='See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.'/>
                    </li>
                    <li>
                        <ItemUs img={img7} title='Supply Chain' 
                        descr='See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.'/>
                    </li>
                    <li>
                        <ItemUs img={img8} title='Fleet' 
                        descr='See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.'/>
                    </li>
                </ul>
            </div>
            <div className='usage__question'>
                <Title mix='small'>Don't See Your Industry?</Title>
                <Description>Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions.</Description>
                <div className='usage__button'>
                    <Button mix='black-gr'>Contact Us</Button>
                </div>
            </div>
        </div>
    )
}

export default Usage;