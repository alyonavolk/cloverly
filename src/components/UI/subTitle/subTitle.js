import './subTitle.scss';
import cx from 'classnames';

const SubTitle = ({children, mix}) => {
    return(
        <h2 className={cx('sub-title', `sub-title__${mix}`)}>
            {children}
        </h2>
    )
}

export default SubTitle;