import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import DisasterCard from "../Components/DisasterCard"
import Footer from "../Components/Footer"
import "./HomePage.css"

const Home = () => {

    return(
        <div className="home">
            <Navbar/>
            <Hero />
            <div className="cardContainer">
                <DisasterCard head="Earthquake" content="Earthquakes are sudden, intense movements of the Earth's surface caused by tectonic shifts. Ranging from minor tremors to severe quakes, they result from the release of built-up energy in the Earth's crust. Measured by the Richter scale, their impact can lead to ground ruptures, tsunamis, and significant damage. Preparedness and resilient construction practices are essential for minimizing the risks associated with these powerful natural events."/>
                <DisasterCard head="Earthquake" content="Earthquakes are sudden, intense movements of the Earth's surface caused by tectonic shifts. Ranging from minor tremors to severe quakes, they result from the release of built-up energy in the Earth's crust. Measured by the Richter scale, their impact can lead to ground ruptures, tsunamis, and significant damage. Preparedness and resilient construction practices are essential for minimizing the risks associated with these powerful natural events."/>
                <DisasterCard head="Earthquake" content="Earthquakes are sudden, intense movements of the Earth's surface caused by tectonic shifts. Ranging from minor tremors to severe quakes, they result from the release of built-up energy in the Earth's crust. Measured by the Richter scale, their impact can lead to ground ruptures, tsunamis, and significant damage. Preparedness and resilient construction practices are essential for minimizing the risks associated with these powerful natural events."/>
                <DisasterCard head = "Tsunami" content="Tsunamis are formidable natural events triggered by undersea disturbances such as earthquakes, volcanic eruptions, or landslides. These disturbances displace massive amounts of water, creating powerful ocean waves that can travel across entire ocean basins. Tsunamis pose a significant threat to coastal areas, often causing widespread destruction and loss of life. Early warning systems and community preparedness are vital in mitigating the impact of tsunamis, allowing for timely evacuations and reducing the risks associated with these immense and potentially devastating sea waves."/>
                <DisasterCard head = "Floods" content="Floods, natural disasters characterized by the overflow of water onto usually dry land, can result from heavy rainfall, storm surges, or the rapid melting of snow. They pose a substantial risk to communities, causing widespread damage to infrastructure and threatening lives. Flood preparedness involves monitoring weather conditions, implementing effective drainage systems, and establishing emergency response plans. Climate change exacerbates the frequency and severity of floods, emphasizing the importance of sustainable practices to mitigate these risks. Swift action, community awareness, and resilient urban planning contribute to minimizing the impact of floods and ensuring the safety of affected populations." />
                <DisasterCard head = "Floods" content="Floods, natural disasters characterized by the overflow of water onto usually dry land, can result from heavy rainfall, storm surges, or the rapid melting of snow. They pose a substantial risk to communities, causing widespread damage to infrastructure and threatening lives. Flood preparedness involves monitoring weather conditions, implementing effective drainage systems, and establishing emergency response plans. Climate change exacerbates the frequency and severity of floods, emphasizing the importance of sustainable practices to mitigate these risks. Swift action, community awareness, and resilient urban planning contribute to minimizing the impact of floods and ensuring the safety of affected populations." />
            </div>
            <Footer />
        </div>
    );
}
export default Home;