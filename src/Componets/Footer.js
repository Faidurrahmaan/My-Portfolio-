import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className="footer">
            <h2 className="footertext">Interested in collaborating with me?</h2>
            <h3 className="footertext2"> I’m always open to discussing product design work or partnership opportunities.</h3>
            <a href='https://dev-faidurrahmaan.pantheonsite.io/contact'><button className="footerContact"> Contact me </button></a>
            <div className="footerMedia">
                <div className='column'>
                    <a href="http://www.facebook.com/abiodun.olamilekan.336717"><FontAwesomeIcon className="footerIcon" icon={faFacebookF} /></a>
                    <a href="http://www.twitter.com/faidurrahmaan"><FontAwesomeIcon className="footerIcon" icon={faTwitter}  /></a>
                    <a href="http://www.linkedin.com/in/faidurrahmaan-ogunkanmi-3a7793253"><FontAwesomeIcon className="footerIcon" icon={faLinkedinIn} /></a>
                    <a href="https://dev-faidurrahmaan.pantheonsite.io/"><FontAwesomeIcon className="footerIcon" icon={faWordpress} /></a>
                    <a href="faidurrahmaan@gmail.com"><FontAwesomeIcon className="footerIcon" icon={faEnvelope} /></a>
                </div>
                <div className='column' id="fnum">
                    <p>(+234) 09013059250</p>
                </div>
                <div className='column'>
                    <p>© 2023 | Copyright by <a href='https://dev-faidurrahmaan.pantheonsite.io'>fd-Wiseweb.</a></p>
                </div>
            </div>
        </div>
    )
    
}

export default Footer;