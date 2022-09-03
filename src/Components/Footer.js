import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

function Footer()
{
    return(
        <div>
            <div className='flex flex-col'>
                <div>
                    <h5>About us</h5>
                    <p>Skillarena is dedicated to constant learning & knowledge sharing.</p>
                    <ul>
                        <li><LocationOnIcon/> Bennett University</li>
                        <li><LocalPhoneIcon/> +91 8383871256</li>
                        <li><QueryBuilderIcon/> Mon - Sat 8.00 - 18.00</li>
                    </ul>
                </div>
                <div>
                    <h5>Popular Courses</h5>
                    <ul>
                        <li>Ethical Hacking</li>
                        <li>App Development</li>
                        <li>Publication Relations</li>
                        <li>Entrepreneurship</li>
                        <li>Blockchain</li>
                        <li>Robotics</li>
                    </ul>
                </div>
                <div>
                    <h5>Support</h5>
                    <ul>
                        <li>Course</li>
                        <li>About</li>
                        <li>Mentors</li>
                        <li>Events</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <p>© 2022 Skillarena, All Rights Reserved</p>
                </div>
                <div>
                    <p>Call +91 98765 32109</p>
                    <div>
                        <p>Follow us</p>
                        <LinkedInIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;