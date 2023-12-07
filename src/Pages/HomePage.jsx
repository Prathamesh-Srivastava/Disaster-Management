import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import DisasterCard from "../Components/DisasterCard"
import "./HomePage.css"
const Home = () => {

    return(
        <div className="home">
            <Navbar/>
            <Hero />
            <div className="cardContainer">
                <DisasterCard head="Earthquack" content="AddContent"/>
                <DisasterCard head = "Tsunami" content="AddContent"/>
            </div>
        </div>
    );
}
export default Home;