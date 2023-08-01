import HomeHelp from "./HomeHelp";
import HomeAboutUs from "./HomeAboutUs";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import Navigation from "./Navigation";
import HomeContact from "./HomeContact";
import HomeMainSection from "./HomeMainSection";


function Home() {
    return (
        <>
            <Navigation />
            <HomeMainSection />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeHelp />
            <HomeContact />
        </>
    );
}

export default Home;