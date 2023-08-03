import '../scss/Navigation.scss'
function Navigation() {
    return (
        <>
            <div className="wrapper">
                <div className="nav-buttons">
                    <button className='nav-btn'>Zaloguj się</button>
                    <button className='nav-btn'> Załóż konto</button>
                </div>
                <ul className="nav-categories">
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        </>
    );
}

export default Navigation;