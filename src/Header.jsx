import Logo from './assets/i track.png';

function Header(){
    return(
        <header>
            <img src={Logo} alt="I Track Logo" />
            <div>
                <h1>Stay on Track. Feel the Change.</h1>
            </div>
            <hr className='line1' />
            <hr className='line2' />
        </header>
        
    );
}

export default Header
