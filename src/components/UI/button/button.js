import './button.scss';
import cx from 'classnames';

const Button = ({children, mix}) => {

    return(
        <button className={cx('button', `button__${mix}`)}>
            {children}
        </button>
    )
}

export default Button;