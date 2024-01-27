import './our services.css';

import digital_marketing from '../Images/digital_marketing.png';
import web_development from '../Images/web_development.png';
import content_inline from '../Images/content_inline.png';
import marketing_mobile from '../Images/marketing_mobile.png';
import user_experience_design from '../Images/user_experience_design.png';
import video_library from '../Images/video_library.png';

const OurServices = () => {

	return (
		<>
			<section className="services-wrapper bg-black text-white p-2 p-md-5" id="services">
				<div className="container">
					<h3>Our Services</h3>
					<div className="hr mb-5"></div>
					<div className="row g-4">
						<div className="col-md-4">
							<img src={ digital_marketing } className="mb-2" alt="Digital Marketing"/>
							<h4>Digital Branding</h4>
							<p>
								From logo design to brand strategy, we breathe life into your brand, ensuring it stands out in the crowded digital space.
							</p>
						</div>
						<div className="col-md-4">
							<img src={ web_development } className="mb-2" alt="Web Development"/>
							<h4>Web Development</h4>
							<p>
								Crafting visually stunning and highly functional websites that leave a lasting impression and drive results.
							</p>
						</div>
						<div className="col-md-4">
							<img src={ content_inline } className="mb-2" alt="Content Inline"/>
							<h4>Creative Content</h4>
							<p>
								Captivating content that tells your story, engages your audience, and builds a strong online presence.
							</p>
						</div>
						<div className="col-md-4">
							<img src={ marketing_mobile } className="mb-2" alt="Mobile Marketing"/>
							<h4>Digital Marketing</h4>
							<p>
								Strategic digital marketing solutions to boost your online visibility, drive traffic, and convert leads into customers.
							</p>
						</div>
						<div className="col-md-4">
							<img src={ user_experience_design } className="mb-2" alt="UX and UI design"/>
							<h4>UX/UI Designer</h4>
							<p>
								Strategic digital marketing solutions to boost your online visibility, drive traffic, and convert leads into customers.
							</p>
						</div>
						<div className="col-md-4">
							<img src={ video_library } className="mb-2" alt="Video Libary"/>
							<h4>Videography</h4>
							<p>
								Strategic digital marketing solutions to boost your online visibility, drive traffic, and convert leads into customers.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default OurServices;
