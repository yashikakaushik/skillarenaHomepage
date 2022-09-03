import StarRateIcon from '@mui/icons-material/StarRate';

function ReviewComponent(){

    return(
        <div>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at facilisis urna erat 
            lobortis vel morbi ornare in.”</p>
            <div>
                <img/>
                <div>
                    <h5>Raghav</h5>
                    <p>New Delhi, India</p>
                </div>
                <div>
                    <StarRateIcon/>
                    <StarRateIcon/>
                    <StarRateIcon/>
                    <StarRateIcon/>
                    <StarRateIcon/>
                </div>
            </div>
        </div>
    )

}

export default ReviewComponent;