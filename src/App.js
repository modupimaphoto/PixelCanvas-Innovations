import './App.css';
import Header from './Header.js';
import Hero from './Hero.js';

function App() {
  return (
    <>
      <Header />
      <Hero />
	  <section className="bg-black text-white">
			<div className="container">
				<div className="row">
					<div className="col-md-4 p-4">
						<h4>Launch Business</h4>
						<p>
							At PixelCanvas Innovations, we are a team of passionate creatives, tech enthusiasts, and strategic thinkers.
						</p>
					</div> 
					<div className="col-md-4 p-4">
						<h4>Online Support Team</h4>
						<p>
							At PixelCanvas Innovations, we are a team of passionate creatives, tech enthusiasts, and strategic thinkers.
						</p>
					</div> 
					<div className="col-md-4 p-4">
						<h4>Time Management</h4>
						<p>
							At PixelCanvas Innovations, we are a team of passionate creatives, tech enthusiasts, and strategic thinkers.
						</p>
					</div> 
				</div>
			</div>
	  </section>
	  <section className="about-us-wrapper bg-black text-white p-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h3>About Us</h3>
						<div className="hr"></div>
						<p>
							At <span className="font-color-pink">PixelCanvas Innovations</span>, we are a team of passionate creatives, tech enthusiasts, and strategic thinkers. 
							With a shared love for innovation, we embark on a journey to redefine digital landscapes. 
							Our mission is to empower brands through cutting-edge design, seamless user experiences, and strategic digital solutions.
						</p>
					</div>
					<div className="col-md-6"></div>
				</div>
			</div>
	  </section>
	  <section className="services-wrapper bg-black text-white p-5">
			<div className="container">
				<h3>Our Services</h3>
				<div className="hr mb-5"></div>
				<div className="row g-4">
					<div className="col-md-4">
						<h4>Digital Branding</h4>
						<p>
							From logo design to brand strategy, we breathe life into your brand, ensuring it stands out in the crowded digital space.
						</p>
					</div>
					<div className="col-md-4">
						<h4>Web Development</h4>
						<p>
							Crafting visually stunning and highly functional websites that leave a lasting impression and drive results.
						</p>
					</div>
					<div className="col-md-4">
						<h4>Creative Content</h4>
						<p>
							Captivating content that tells your story, engages your audience, and builds a strong online presence.
						</p>
					</div>
					<div className="col-md-4">
						<h4>Digital Marketing</h4>
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

export default App;
