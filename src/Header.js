import twitter from './Images/Social/twitter.png'
import instagram from './Images/Social/instagram.png';
import facebook from './Images/Social/facebook.png';
import youtube from './Images/Social/youtube.png';
import linkedin from './Images/Social/linkedin.png';
import logo from './Images/logo.png';

const Header = () => {

    return (<>
        <header className="fixed-top">
          <div>
              <div className='container d-flex justify-content-between pt-2 text-white'>
                  <div>
                      Left
                  </div>
                  <div className="d-none d-md-block">
						<ul className="list-inline">
							<li className="d-inline-block p-2">+123 456 6789</li>
							<li className="d-inline-block p-2">pixelcanvasinnovations@gmail.com</li>
						</ul>
				  </div>
                  <div className="d-none d-md-block">
						<button className="btn btn-custom-1 text-uppercase rounded-5">Request a Consult</button>
				  </div>
              </div>
          </div>
          <nav className="p-3 text-white">
				<div className="container">
					
					
					<ul className="list-inline">
						<li className="d-inline-block logo">
							<img src={ logo } alt="Logo"/>
						</li>
						<li className="d-inline-block p-3">
							<a href="#">Home</a>
						</li>
						<li className="d-inline-block p-3">
							<a href="#">Blog</a>
						</li>
						<li className="d-inline-block p-3">
							<a href="#">Page</a>
						</li>
						<li className="d-inline-block p-3">
							<a href="#">Services</a>
						</li> 
						<li className="d-inline-block p-3">
							<a href="#">Testimonials</a>
						</li>
						<li className="d-inline-block p-3">
							<a href="#">Contant</a>
						</li>
						<li className="d-inline-block p-3">
							<a href="#">Buy Now</a>
						</li>
					</ul>
				</div>
          </nav>
        </header>
      </>);
}

export default Header;
