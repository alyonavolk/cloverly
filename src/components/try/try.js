import './try.scss';
import Title from '../UI/title/title';
import Description from '../UI/description/description';
import Button from '../UI/button/button';

const Try = () => {
    return(
        <div className='try'>
            <div className='try__ln-gr'>
                <Title mix='try'>What Activities Will You Offset?</Title>
                <Description mix='try'>Neutralize your carbon footprint with the <br/> Cloverly API.</Description>
                <div className='try__button'>
                    <Button mix='green-bl'>Try Cloverly</Button>
                </div>
            </div>
        </div>
    )
}

export default Try;