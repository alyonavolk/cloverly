import './button.scss';

const Button = (props) => {

    return(
        <button className='btn'>
            {props.children}
        </button>
    )
}

export default Button;