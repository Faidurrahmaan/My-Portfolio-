import mypics from '../Assets/images/mypics.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faWordpress } from '@fortawesome/free-brands-svg-icons'

function Welcomepg() {
    return (
        <div className="intro">
            <div className="intro_txt">
                <h2 className="hello">Hello, i'm</h2>
                <h1 className="myname">Ogunkanmi Faidurrahmaan</h1>
                <h3 className="brif">A Professional Software & Websites Developer From Nigeria</h3>
                <p className="brif2">I’m an aspiring software & website developer and graphics designer with a strong skills set based in Nigeria, Looking to deliver excellent software & website development and wonderful graphics to help grow more business.</p>
                <div className='links'>
                    <a href="https://dev-faidurrahmaan.pantheonsite.io/"><button class="hire">Hire me</button></a>
                    <a href="http://www.facebook.com/abiodun.olamilekan.336717"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
                    <a href="http://www.twitter.com/faidurrahmaan"><FontAwesomeIcon className="icon" icon={faTwitter}  /></a>
                    <a href="http://www.linkedin.com/in/faidurrahmaan-ogunkanmi-3a7793253"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                    <a href="https://dev-faidurrahmaan.pantheonsite.io/"><FontAwesomeIcon className="icon" icon={faWordpress} /></a>
                </div>
                </div><div className="intro_img">
                <img className="mypics" src={mypics} alt="fd-wiseweb logo" />
            </div>
        </div>
    );
}
export default Welcomepg;
