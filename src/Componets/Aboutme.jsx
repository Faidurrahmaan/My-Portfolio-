import mypics from '../Assets/images/mypics.png';
import mycv from '../Assets/files/mycv.docx';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Aboutme() {
    return (
        <div className="aboutme">
            <div className="aboutme_txt">
                <img className="mypics" src={mypics} alt="fd-wiseweb logo" />
            </div>
            <div className="intro_aboutme">
                
                <h2 className="Aboutme">About me</h2>
                <h3 className="hi">Hi, It's nice to have you here.</h3>
                <p className="discription">Am Faidurrahmaan, Over some years I acquired a particular set of skills  that are a nightmare for bugs. They allow me to plan/ deliver reliable scalable software & manage dev teams. I dont know who you are but if you work on something cool, aim to reshape limits, reach out: I like to Impact bottom line, play nice & help others along the way to be great.
                        I am a software developer who is into coding and also no-code development. I have a working experience of over a year and still very much ready to learn more and work at any available space to make an impact.
                        My skills in coding are HTML, CSS, Bootstraps, JavaScript , C# programming, and very much dedicated to perfecting my skills on each of them all.
                        My skills in no-code development, am using Bubble.io development platform and it’s one of the leading platforms.
                        My skills in Website development is WordPress.
                        My skills in Graphic designing are Adobe Illustrator and Corel Draw and still striving in perfecting my skills on each of them.</p>
                    <div className="socials">
                        <a href={mycv}><button className="downloadcv"><FontAwesomeIcon icon={faFileArrowDown}/> Download CV</button></a>
                    </div>
                </div>
        </div>
    )
    
}

export default Aboutme;