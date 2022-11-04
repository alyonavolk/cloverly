import './button.scss';

const Button = (props) => {

    return(
        <button className='btn'>
            {props.nameBtn}
        </button>
    )
}

export default Button;