import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Rectangle2 from '../Assets/Rectangle2.png';
import Rectangle3 from '../Assets/Rectangle3.png';
import Rectangle4 from '../Assets/Rectangle4.png';
import Rectangle5 from '../Assets/Rectangle5.png';
import Rectangle6 from '../Assets/Rectangle6.png';
import Rectangle7 from '../Assets/Rectangle7.png';
import './HomePage2.css'

function HomePage2(){
    return(
        <div className='full-page2'>
            <div className='written'>
                <h1 className='heading'>#GetSkilled!</h1>
                <p className='para'>#1 Choice of Students to Learn</p>
            </div>
            <div className='written'>
                <ul>
                    <li><ArrowForwardIcon/></li>
                    <li>Show All</li>
                    <li>Popular</li>
                    <li>Certificate</li>
                    <li>Pack</li>
                </ul>
            </div>
            <div>
                <div>
                    <img src={Rectangle2} className='pic'/>
                    <img src={Rectangle3} className='pic'/>
                    <img src={Rectangle4} className='pic'/>
                </div>
                <div>
                    <img src={Rectangle5} className='pic'/>
                    <img src={Rectangle6} className='pic'/>
                    <img src={Rectangle7} className='pic'/>
                </div>
            </div>
        </div>
    )
}

export default HomePage2;