import './hero.css';

import rocket_icon from '../Images/rocket_icon.png';
import support_icon from '../Images/support_icon.png';
import clock_icon from '../Images/clock_icon.png';


const Hero = () => {

	return  (
		<>
			<section className="hero-wrapper">
				<div className="container text-white">
					<h1>
						Transforming Ideas into Digital Masterpieces
					</h1>
					<p className="mb-4">
						Welcome to PixelCanvas Innovations, where creativity meets technology. We craft digital experiences that captivate, inspire, and elevate your brand to new heights.
						Let's turn your vision into a pixel-perfect reality.
					</p>
					<button className="btn btn-custom-2 text-uppercase rounded-5 mb-3 mb-md-0 d-block d-md-inline-block">Read More</button>
					<button className="btn btn-custom-3 text-uppercase rounded-5 d-block d-md-inline-block">Request a Consult</button>
				</div>
			</section>
			<section className="bg-black text-white">
				<div className="container">
					<div className="row">
						<div className="col-md-4 p-4">
							<div className="d-flex align-items-center mb-2">
								<img src={ rocket_icon } alt="Rocket Icon"/>
								<h4 className="mx-2">Launch Business</h4>
							</div>
							<p>
								At PixelCanvas Innovations, we are a team of passionate creatives, tech enthusiasts, and strategic thinkers.
							</p>
						</div>
						<div className="col-md-4 p-4">
							<div className="d-flex align-items-center mb-2">
								<img src={ support_icon } alt="Suport Icon"/>
								<h4 className="mx-2">Online Support Team</h4>
							</div>
							<p>
								At PixelCanvas Innovations, we are a team of passionate creatives, tech enthusiasts, and strategic thinkers.
							</p>
						</div>
						<div className="col-md-4 p-4">
							<div className="d-flex align-items-center mb-2">
								<img src={ clock_icon } alt="Clock Icon"/>
								<h4 className="mx-2">Time Management</h4>
							</div>
							<p>
								At PixelCanvas Innovations, we are a team of passionate creatives, tech enthusiasts, and strategic thinkers.
							</p>
						</div>
					</div>
				</div>
	  		</section>
		</>
	);
}

export default Hero;
