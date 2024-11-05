import AllTypesofAppliancesServicesSec from "./components/homepage/all-appliances-services"
import Carousal from "./components/homepage/carousel"
import Testimonials from "./components/homepage/testimonial"
import TypesofServicesSec from "./components/homepage/types-of-ac-service"
import Welcomesection from "./components/homepage/welcomeSection"

const HomeComponent = ()=>{
    return(
        <>
        <Carousal/>
        <Welcomesection/>
        <TypesofServicesSec/>
        <AllTypesofAppliancesServicesSec/>
        <Testimonials/>
        </>
    )
}

export default HomeComponent
