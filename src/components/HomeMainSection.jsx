import '../scss/HomeMainSection.scss'
import Navigation from "./Navigation.jsx";
function HomeMainSection() {
    return (
        <>

            <div className='home-main-section'>

                <img className="home-img" src="src/assets/Home-Hero-Image.jpg" alt="Home hero image"/>

                <div className='home-content'>
                    <Navigation />
                    <div className='home-text'>
                            <h2>Zacznij Pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
                            <img src="src/assets/Decoration.svg" alt="decoration"/>
                        <div className="home-btns">
                            <button>ODDAJ RZECZY</button>
                            <button>ZORGANIZUJ ZBIÓRKĘ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeMainSection;