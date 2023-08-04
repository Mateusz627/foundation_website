import '../scss/HomeMainSection.scss'
import Navigation from "./Navigation.jsx";
function HomeMainSection() {
    return (
        <>

            <div className='home-main-section'>

                <div className="home-img"></div>

                <div className='home-content'>
                    <Navigation />

                    <div className='home-text'>
                            <h2>Zacznij Pomagać! </h2>
                            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                            <img src="src/assets/Decoration.svg" alt="decoration"/>

                        <div className="home-buttons">
                            <button className="home-btn">
                                 <p>ODDAJ</p>
                                 <p>RZECZY</p>
                            </button>
                            <button className="home-btn">
                                <p>ZORGANIZUJ</p>
                                <p>ZBIÓRKĘ</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeMainSection;