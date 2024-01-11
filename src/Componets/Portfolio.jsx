import WMSapp from '../Assets/images/WMSapp.jpeg';
import crm from '../Assets/images/crm.jpeg';
import skillmatrix from '../Assets/images/skillmatrix.jpeg';
import Pool from '../Assets/images/Pool.png';
import Leemah from '../Assets/images/Leemah.png'
import Ibmm from '../Assets/images/Ibmm.jpg'

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="myportfolio">My Portfolio</h2>
            <p className="portfolio-head">Websites and Applications</p>
            <div className="portfolio-sub">
                <div className="portfolio-card">
                    <img className="portfolio-asset" src={WMSapp} alt="image1" />
                </div>
                <div className="portfolio-card">
                    <img className="portfolio-asset" src={crm} alt="image2" />
                </div>
                <div className="portfolio-card">
                    <img className="portfolio-asset" src={skillmatrix} alt="image3" />
                </div>
            </div>
            <p className="portfolio-head1">Graphics</p>
            <div className="portfolio-sub1">
                <div className="portfolio-card2">
                    <img className="portfolio-asset2" src={Pool} alt="image4" />
                </div>
                <div className="portfolio-card2">
                    <img className="portfolio-asset2" src={Ibmm} alt="image5" />
                </div>
                <div className="portfolio-card2">
                    <img className="portfolio-asset2" src={Leemah} alt="image6" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;