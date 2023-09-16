import image from '../images/Logo.svg'; 
const Logo = () => {
    return (
        <div className='logo'>
            <img src={image} alt="logo" />
        </div>
    );
}

export default Logo;