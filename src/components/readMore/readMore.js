import './readMore.scss';
import Button from '../UI/button/button';
import SubTitle from '../UI/subTitle/subTitle';
import Title from '../UI/title/title';

const ReadMore = () => {
    return(
        <div className='readMore'>
            <SubTitle>Cloverly Blog</SubTitle>
            <Title>The Latest in the World of Sustainability</Title>
            <div className='readMore__button'>
                <Button mix='transparent'>Read More</Button>
            </div>
        </div>
    )
}

export default ReadMore;