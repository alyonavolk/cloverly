import './description.scss';
import cx from 'classnames';

const Description = ({children, mix}) => {
    return(
        <h2 className={cx('description', `description__${mix}`)}>
            {children}
        </h2>
    )
}

export default  Description;