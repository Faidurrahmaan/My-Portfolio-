import fdlogo from '../Assets/images/fdlogo.png';
import mycv from '../Assets/files/mycv.docx';

function Header() {
    return(
        <div className='nav'>
            <div className="nav-div-logo">
                <img className='logo' src={fdlogo} alt="react logo" />
            </div>
            <div className="nav-div-menue">
                <a className="nav-text" href="#Contactme">Contact me</a>
            <a href={mycv}><button className="download">Download CV</button></a>
            </div>
         </div>
    )
}

export default Header;