import './contact.css';

const Contact = () => {

	return (
		<>
			<section className="contact-wrapper bg-black text-white pt-5 pt-md-0 pb-5 pb-md-0">
				<div className="container">
					<div className="row">
							<div className="col-md-6 p-2 p-md-5">
								<h3>Get in Touch</h3>
								<div className="hr-white"></div>
								<p className="mb-4">
									Ready to elevate your digital presence? Contact us today to discuss your project and let's create something extraordinary together.
								</p>

								<form>
									<div className="form-group mb-3">
										<label for="fullname" className="mb-2">Full Name</label>
										<input type="text" id="fullname" placeholder="Enter your Full Name"
											className="p-2 px-3 bg-dark form-control"/>
									</div>
									<div className="form-group mb-3">
										<label for="email" className="mb-2">Email</label>
										<input type="text" id="email" placeholder="Enter your email"
											className="p-2 px-3 bg-dark form-control"/>
									</div>
									<div className="form-group mb-3">
										<label for="email" className="mb-2">Message</label>
										<textarea className="bg-dark form-control" placeholder="Type your message here..."></textarea>
									</div>
									<button className="btn btn-custom-4" type="submit">Send Message</button>
								</form>
						</div>
						<div className="col-md-6">
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
