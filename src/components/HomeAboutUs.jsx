import '../scss/HomeAboutUs.scss';
import decoration from '../assets/Decoration.svg';
import signature from '../assets/Signature.svg';
import people from '../assets/People.jpg';

function HomeAboutUs() {
    return (
        <div className="home-about">
            <div className="about-content">
                <div className="about-text">
                    <h2>O nas</h2>
                    <img src={decoration} alt="decoration" />
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                   <div className="about-signature"><img src={signature} alt="signature" /></div>
                </div>
            </div>
            <div className="about-image">
                <img src={people} alt="people" />
            </div>
        </div>
    );
}

export default HomeAboutUs;
