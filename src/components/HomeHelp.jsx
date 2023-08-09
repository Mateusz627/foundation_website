import '../scss/HomeHelp.scss';
import decoration from '../assets/Decoration.svg';

function HomeHelp() {
    return (
        <div className="home-help">
            <div className="help-heading">
                <h2 className="help-heading_title">Komu pomagamy?</h2>
                <img className="help-heading_signature" src={decoration} alt="signature" />
            </div>
            <div className="help-categories">
                    <p>Fundacjom</p>
                    <p>Organizacjom pozarządowym</p>
                    <p>Lokalnym zbiórkom</p>
            </div>
            <p className="help-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className="help-content">
                <div className="article">
                    <div className="articles">
                        <h2>Fundacja “Dbam o Zdrowie”</h2>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
                <div className="article">
                    <div className="articles">
                        <h2>Fundacja “Dla dzieci”</h2>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <p>ubrania, meble, zabawki</p>
                </div>
                <div className="article">
                    <div className="articles">
                        <h2>Fundacja “Bez domu”</h2>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
                <div className="pagination">
                    <div className="pagination-item">1</div>
                    <div className="pagination-item">2</div>
                    <div className="pagination-item">3</div>
                </div>
            </div>
        </div>
    );
}

export default HomeHelp;