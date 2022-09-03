import HomePage2 from "../Pages/HomePage2";
import HomePage1 from "../Pages/HomePage1";
import HomePage3 from "../Pages/HomePage3";
import HomePage4 from "../Pages/HomePage4";
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function HomePage(){
    return(
        <>
            <Header/>
            <HomePage1/>
            <HomePage2/>
            <HomePage3/>
            <HomePage4/>
            <Footer/>
        </>
    )
}

export default HomePage;