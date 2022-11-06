import './itemUs.scss';
import Title from '../title/title';
import Description from '../description/description';

const ItemUs = (props) => {
    return(
        <div className='itemUs'>
            <img src={props.img} alt='' />
            <div>
                <Title mix='item'>{props.title}</Title>
                <Description mix='item'>{props.descr}</Description>
                <p>Learn more</p>
            </div>
        </div>
    )
}

export default ItemUs;