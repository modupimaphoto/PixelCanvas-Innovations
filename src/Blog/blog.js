import './blog.css';

import modern_websites from '../Images/modern_websites.jpg';
import marketing_strategy from '../Images/marketing_strategy.jpg';
import modern_website_2 from '../Images/modern_website_2.jpg';

import like_icon from '../Images/like_icon.png';
import comment_icon from '../Images/comment_icon.png';
import share_icon from '../Images/share_icon.png';

const Blog = () => {

	return (
		<>
			<section className="blog-wrapper bg-purple p-2 p-md-5 text-white pt-5 pt-md-0  pb-5">
				<div className="container">
					<h3>Our Blog</h3>
					<div className="hr-white mb-5"></div>
					<div className="row g-4">
						<div className="col-md-6">
							<div className="card">
								<img src={ modern_websites } alt="Modern Websites" className="img-fluid rounded-3 card-img-top mb-4" />

								<h4>The Art of Logo Design: Crafting a Visual Identity</h4>
								<p>
									This blog post will explore the importance of logo design in building a strong brand identity.
									It will cover the key elements of an effective logo, share tips on choosing colors and fonts, and highlight successful logo redesigns.
									Readers will gain insights into how a well-designed logo can leave a lasting impression.
								</p>
								<div className="d-flex justify-content-between">
									<div>
										<a href="#">Read More</a>
									</div>
									<div>
										<img src={ like_icon } className="mx-2" alt="Like"/>
										<img src={ comment_icon } className="mx-2" alt="Comment"/>
										<img src={ share_icon } className="mx-2" alt="Share"/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="row g-4 mb-3">
								<div className="col-12 col-md-4">
									<img src={ modern_website_2 } className="rounded-3" alt=""/>
								</div>
								<div className="col-12 col-md-8">
									<h4>Navigating the Digital Landscape: Trends in Web Development 2024</h4>
									<p>
										This blog post will delve into the latest trends in web development for the year 2024.
										It will cover topics such as responsive design, micro-interactions, and the use of emerging technologies like AI and VR in web development. Readers will gain insights into how staying ahead of these trends can enhance the user experience.
									</p>
									<div className="d-flex justify-content-between">
										<div>
											<a href="#">Read More</a>
										</div>
										<div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-4">
									<img src={ marketing_strategy } className="rounded-3" alt=""/>
								</div>
								<div className="col-12 col-md-8">
									<h4 className="pt-3">Content that Converts: Strategies for Effective Digital Marketing</h4>
									<p>
										This blog post will focus on digital marketing strategies to create content that engages and converts.
										It will discuss the power of storytelling, the importance of visual content, and the role of social media in digital marketing. Readers will learn practical tips for crafting compelling content that resonates with their target audience.
									</p>
									<div className="d-flex justify-content-between">
										<div>
											<a href="#">Read More</a>
										</div>
										<div>

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

export default Blog;
