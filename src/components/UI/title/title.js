import './title.scss';
import cx from 'classnames';

const Title = ({children, mix}) => {
    return(
        <h2 className={cx('title', `title__${mix}`)}>
            {children}
        </h2>
    )
}

export default Title;