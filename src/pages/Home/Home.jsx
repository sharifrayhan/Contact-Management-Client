import Banner from "./Components/Banner";
import { cover } from "../../assets/index";

const Home = () => {
    const bgStyle = {
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div style={bgStyle}>
            <Banner />
        </div>
    );
};

export default Home;
