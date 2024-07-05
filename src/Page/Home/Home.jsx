import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import EventsNews from "./EventNews/EventNews";
import Galary from "./Galary/Galary";
import Promotions from "./Promotion/Promotion";
import Subscription from "./Subscription/Subscription";
import Testimonials from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Promotions></Promotions>
            <Galary></Galary>
            <Testimonials></Testimonials>
            <EventsNews></EventsNews>
            <Subscription></Subscription>
            <Contact></Contact>
        </div>
    );
};

export default Home;