import './footer.css';

import twitter_icon from '../Images/Social/twitter_icon.png';
import instagram_icon from '../Images/Social/instagram_icon.png';
import facebook_icon from '../Images/Social/facebook_icon.png';
import youtube_icon from '../Images/Social/youtube_icon.png';
import pinterest_icon from '../Images/Social/pinterest_icon.png';
import linkedin_icon from '../Images/Social/linkedin_icon.png';

import mail_icon from '../Images/mail_icon.png';
import telephone_icon from '../Images/telephone_icon.png';

const Footer = () => {

	let current_year = new Date().getFullYear();
	return (
		<>
			<footer className="footer-wrapper text-white p-2 p-md-5 pt-3">
				<div className="container">
					<div className="row g-3">
						<div className="col-md-4">
							<h5>PixelCanvas Innovations</h5>
							<div className="hr-footer mb-2"></div>
							<ul className="list-unstyled">
								<li>
									<a className="text-decoration-none text-white" href="">About Us</a>
								</li>
								<li>
									<a className="text-decoration-none text-white" href="">Blog</a>
								</li>
								<li>
									<a className="text-decoration-none text-white" href="">FAQ's</a>
								</li>
								<li>
									<a className="text-decoration-none text-white" href="">Careers</a>
								</li>
							</ul>
						</div>
						<div className="col-md-4">
							<h5>Contact</h5>
							<div className="hr-footer"></div>
							<ul className="list-unstyled">
								<li className="mb-1">
									<img src={ telephone_icon } className="mx-1" alt="Telephone Icon"/>
									+123 456 6789
								</li>
								<li className="mb-1">
									<img src={ mail_icon } className="mx-1" alt="Mail Icon"/>
									pixelcanvasinnovations@gmail.com
								</li>
								<li>
									Gauteng, Wnyberg, 2090
								</li>
							</ul>
						</div>
						<div className="col-md-4">
							<h5>Follow Us</h5>
							<div className="hr-footer mb-3"></div>
							<a href="https://www.x.com" className=""><img src={ twitter_icon } alt="Twitter Icon"/></a> <span className="px-2"> | </span>
							<a href="https://www.instagram.com" className="px-3"><img src={ instagram_icon } alt="Instagram Icon"/></a> |
							<a href="https://www.facebook.com" className="px-3"><img src={ facebook_icon } className="facebook" alt="Facebook Icon"/></a> |
							<a href="https://www.youtube..com" className="px-3"><img src={ youtube_icon } className="youtube" alt="Youtube Icon"/></a> |
							<a href="https://www.pinterest.com" className="px-3"><img src={ pinterest_icon } alt="Pinterest Icon"/></a> |
							<a href="https://www.linkedin.com" className="px-3"><img src={ linkedin_icon } alt="Linkedin Icon"/></a>
						</div>
					</div>
					<hr />
					<div className="d-flex flex-column flex-md-row justify-content-between ">
						<div className="mb-3 mb-md-0">
							&copy; { current_year } PixelCanvas Innovations
						</div>
						<div>
						<a className="text-white px-2" href="#">Privacy Policy</a> | <a className="text-white px-2" href="#">Terms of Service</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
