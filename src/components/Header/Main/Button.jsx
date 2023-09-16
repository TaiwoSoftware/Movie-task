import watch from '../images/Play.svg';
const Button = () => {
    return (
        <button className='button-image'>
            <img src={watch} alt='play-image' />
            Watch Trailer
      </button>
    );
}

export default Button;
