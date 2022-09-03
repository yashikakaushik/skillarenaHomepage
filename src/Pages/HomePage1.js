import SearchIcon from '@mui/icons-material/Search';
import Footer from '../Components/Footer';
import Rectangle68 from '../Assets/Rectangle68.png';
import Rectangle69 from '../Assets/Rectangle69.png';
import Rectangle70 from '../Assets/Rectangle70.png';
import Rectangle71 from '../Assets/Rectangle71.png';
import './HomePage1.css'


function HomePage1(){

    return(
        <div className='full-page1'>
            <div className='upper-box'>
                <div className='left-box'>
                    <h1 className='heading'>Grow your professional skill <br/> With best mentors </h1>
                    <p className='para'> Ready to learn and have fun? Find a perfect course and join us today.</p>
                    <div className='search-box'>
                        <input className='search-field' placeholder="Search Your Course"/>
                        <button className='search-icon'><SearchIcon/></button>
                    </div>
                </div>
                <div className='images'>
                    <div className='image-pack'>
                        <img src={Rectangle68} className='pic'/>
                        <img src={Rectangle69} className='pic'/>
                    </div>
                    <div className='image-pack'>
                        <img src={Rectangle70} className='pic align-top'/>
                        <img src={Rectangle71} className='pic align-top'/>
                    </div>
                    
                </div>
            </div>
            <div className='lower-box'>
                <div className='small-box'>
                    <h1>21</h1>
                    <p>Courses</p>
                </div>
                <div className='small-box'>
                    <h1>50000+</h1>
                    <p>Hours of content</p>
                </div>
                <div className='small-box'>
                    <h1>10000+</h1>
                    <p>Students</p>
                </div>
                <div className='small-box'>
                    <h1>1000+</h1>
                    <p>Live Sessions</p>
                </div>

            </div>
            
            {/* <Footer/> */}
        </div>
    )

};

export default HomePage1;