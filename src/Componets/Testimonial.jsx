import efoneweb from '../Assets/images/efoneweb.png';
import bnet from '../Assets/images/bnet.png'

function Testimonial() {
    return (
        <div className="testimonial">
            <h2 className="myTestimonial">Testimonials</h2>
            <div className="testimonial-sub">
                <div className="testimonial-card">
                    <div className="testilogo">
                        <img className="logo" src={efoneweb} alt='image1' />
                    </div>
                    <p className="testidesc">“The wonderful team effort of fd-Wiseweb helped me create new hopes for my industry. With their professionalism, prompt response and courteous service, We are looking forward to continue developing our project with the wonderful fd-Wiseweb. We are grateful for their presence in our professional life… Doing business has never been so efficient and so pleasant! Thank you fd-Wiseweb. ”</p>
                </div>
                <div className="testimonial-card">
                    <div className="testilogo">
                        <img className="logo" src={bnet} alt='image2' />
                    </div>
                    <p className="testidesc2">“We are really impressed by the quality of services we’ve received from fd-Wiseweb. You were right on schedule, charged reasonable prices, were professional, Smart, trustworthy, detail-oriented, courteous in dealings, and delivered items well before time. Our revenue has increased because of fd-Wiseweb and I will definitely use your services again. I highly recommend fd-Wiseweb.”</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;