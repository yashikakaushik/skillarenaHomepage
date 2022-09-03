import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReviewComponent from '../Components/ReviewComponent';

function HomePage4(){
    return(
        <div>
            <h1>What Our Customer Said</h1>
            <div>
                <p>Experienced and best in the industry, our mentors come from</p>
                <div>
                    <ArrowBackIcon/>
                    <ArrowForwardIcon/>
                </div>
            </div>
            <div>
                <ReviewComponent/>
                <ReviewComponent/>
                <ReviewComponent/>
                <ReviewComponent/>
            </div>
        </div>

    )
}

export default HomePage4;