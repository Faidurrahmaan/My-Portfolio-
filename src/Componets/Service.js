import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
function Service() {
    return (
        <div className="service">
            <h2 className="myservice">My Services</h2>
            <div className="service-sub">
                <div className="service-card">
                    <div className="iconi">
                        <FontAwesomeIcon id="icon-1" className="icon" icon={faConnectdevelop}  />
                    </div>
                    <p className="icon-head">Full Stack Web Development</p>
                    <p className="icon-desc">I like to code things from scratch, and enjoy bringing ideas to life in the browser looking to deliver execellent software & website development.</p>
                    <p  className="icon-subhead">Coding Tools :</p>
                    <p className="icon-desc">HTML5, CSS, Bootstrap, JavaScript, C#.</p>
                    <p className="icon-subhead">Low code / No code Tools:</p>
                    <p className="icon-desc">Bubble.io, WordPress and Webflow.</p>
                </div>
                <div className="service-card">
                    <div className="iconi">
                        <FontAwesomeIcon id="icon-1" className="icon" icon={faLayerGroup}  />
                    </div>
                    <p className="icon-head">Graphics Design</p>
                    <p className="icon-desc">I value simple content structure, clean design patterns, and thoughtful interactions, ready to deliver excellent and professional designs.</p>
                    <p  className="icon-subhead">Things i can design:</p>
                    <p className="icon-desc">UI, UX, Flyers, Logos, Branding.</p>
                    <p className="icon-subhead">Design Tools:</p>
                    <p className="icon-desc">Adobe Illustrator, CorelDraw, Canva, Figma.</p>
                </div>
            </div>
        </div>
    )
}

export default Service;