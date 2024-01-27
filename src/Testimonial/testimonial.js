import './testimonial.css';

import client_1 from '../Images/client_1.png';
import client_2 from '../Images/client_2.png';
import client_3 from '../Images/client_3.png';
import quotes_icon from '../Images/quotes_icon.png';

const Testimonial = () => {

	return (
		<>
			<section className="testimonial-wrapper bg-purple text-white p-2 p-md-5 pt-5 pt-md-0">
				<div className="container">
					<h3>Testimonial</h3>
					<p>What Client Say About Us?</p>
					<div className="hr-white mb-5"></div>

					<div className="row g-5">
						<div className="col-md-4">
							<div className="card rounded-4 p-3 pt-4">
								<img className="card-img-top" src={ client_3 } alt="Sandra Bullock"/>
								<div className="card-body">
									<div className="card-text mb-2">
										PixelCanvas Innovations brought our vision to life! Their creative team exceeded our expectations, and the results speak for themselves.
										Our brand now stands out in a crowded market, thanks to their innovative approach.
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<div className="card-title">Sandra Bullock</div>
											<div className="card-subtitle">Resturent Owner</div>
										</div>
										<div>
											<img className="card-img-bottom" src={ quotes_icon } alt="Quotes Icon"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card rounded-4 p-3 pt-4">
								<img className="card-img-top" src={ client_1 } alt="John Smith"/>
								<div className="card-body">
									<div className="card-text mb-2">
										Working with PixelCanvas Innovations was a game-changer for our online presence. Their attention to detail and commitment to quality are unparalleled.
										Their services are top-notch digital solutions.
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<div className="card-title">John Smith</div>
											<div className="card-subtitle">Finance Advisor</div>
										</div>
										<div>
											<img className="card-img-bottom" src={ quotes_icon } alt="Quotes Icon"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card rounded-4 p-3 pt-4">
								<img className="card-img-top" src={ client_2 } alt="Maria Messey"/>
								<div className="card-body">
									<div className="card-text mb-2">
										PixelCanvas Innovations brought our vision to life! Their creative team exceeded our expectations, and the results speak for themselves.
										Our brand now stands out in a crowded market, thanks to their innovative approach.
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<div className="card-title">Maria Messey</div>
											<div className="card-subtitle">Account Professional</div>
										</div>
										<div>
											<img className="card-img-bottom" src={ quotes_icon } alt="Quotes Icon"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Testimonial;
