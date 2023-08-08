import '../scss/HomeSimpleSteps.scss'
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';
import decoration from '../assets/Decoration.svg'
function HomeSimpleSteps() {
    return (
        <>
            <div className="step-container">
                <div className="step-title">
                    <h2>Wystarczą 4 proste kroki</h2>
                    <img src={decoration} alt="decoration"/>
                </div>
                <div className="step-item">
                    <div className="step-content">
                        <img src={icon1} alt="clothing"/>
                        <h2>Wybierz rzeczy</h2>
                        <div className="step-line"></div>
                        <p>ubrania, zabawki,</p>
                        <p>sprzęt i inne</p>
                    </div>
                    <div className="step-content">
                        <img src={icon2} alt="shopping cart"/>
                        <h2>Spakuj je</h2>
                        <div className="step-line"></div>
                        <p>skorzystaj z</p>
                        <p>worków na śmieci</p>
                    </div>
                    <div className="step-content">
                        <img src={icon3} alt="loupe"/>
                            <h2>Zdecyduj komu</h2>
                            <h2>chcesz pomóc</h2>
                        <div className="step-line"></div>
                        <div className="step-text">
                            <p>wybierz zaufane</p>
                            <p>miejsce</p>
                        </div>
                    </div>
                    <div className="step-content">
                        <img src={icon4} alt="refreshment"/>
                        <h2>Zamów kuriera</h2>
                        <div className="step-line"></div>
                        <p>kurier przyjedzie</p>
                        <p>w dogodnym terminie</p>
                    </div>
                </div>
                <button className="step-button">ODDAJ RZECZY</button>
            </div>
        </>
    );
}

export default HomeSimpleSteps;