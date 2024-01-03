import Banner from "./Components/Banner";
import { cover } from "../../assets/index";
import Navbar from "./Components/Navbar";

const Home = () => {
    const bgStyle = {
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div style={bgStyle}>
            <Navbar/>
            <Banner />
        </div>
    );
};

export default Home;
