import './header.css';

import twitter_icon from '../Images/Social/twitter_icon.png'
import instagram_icon from '../Images/Social/instagram_icon.png';
import facebook_icon from '../Images/Social/facebook_icon.png';
import youtube_icon from '../Images/Social/youtube_icon.png';
import pinterest_icon from '../Images/Social/pinterest_icon.png';
import linkedin_icon from '../Images/Social/linkedin_icon.png';

import mail_icon from '../Images/mail_icon.png';
import telephone_icon from '../Images/telephone_icon.png';
import bars from '../Images/bars.png';
import cross from '../Images/cross.png';

import logo from '../Images/logo.png';

const Header = () => {
	
	const handleOpenMenu = () => {
		let menu = document.getElementById("navigation");
		menu.style.marginTop = "0px";
	}
	
	const handlCloseMenu = () => {
		let menu = document.getElementById("navigation");
		menu.style.marginTop = "-1000px";
	}

    return (
      <>
        <header className="fixed-top">
          <div>
              <div className='container d-flex justify-content-between p-2 align-items-center text-white'>
                  <div>
                      <a href="https://www.x.com" className="px-3"><img src={ twitter_icon } alt="Twitter Icon"/></a> |
                      <a href="https://www.instagram.com" className="px-3"><img src={ instagram_icon } alt="Instagram Icon"/></a> |
                      <a href="https://www.facebook.com" className="px-3"><img src={ facebook_icon } className="facebook" alt="Facebook Icon"/></a> |
                      <a href="https://www.youtube.com" className="px-3"><img src={ youtube_icon } className="youtube" alt="Youtube Icon"/></a> |
					  <a href="https://www.pinterest.com" className="px-3"><img src={ pinterest_icon } alt="Pinterest Icon"/></a> |
                      <a href="https://www.linkedin.com" className="px-3"><img src={ linkedin_icon } alt="Linkedin Icon"/></a>
                  </div>
                  <div className="d-none d-xl-block">
						<span className="px-2">
							<img src={ telephone_icon } className="mx-1" alt="Telephone Icon"/>
							+123 456 6789
						</span> |
						<span className="px-2">
							<img src={ mail_icon } className="mx-1" alt="Mail Icon"/>
							pixelcanvasinnovations@gmail.com
						</span>
				    </div>
                  <div className="d-none d-xl-block">
						<button className="btn btn-custom-1 text-uppercase rounded-5">Request a Consult</button>
				   </div>
              </div>
          </div>

          <nav className="bg-black p-2 text-white">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<ul className="d-flex list-inline align-items-center">
								<li className=" logo">
									<img src={ logo } alt="Logo"/>
								</li>
								<li className="d-none d-xl-inline-block p-2">
									<a href="#">Home</a>
								</li>
								<li className="d-none d-xl-inline-block p-2">
									<a href="#">Blog</a>
								</li>
								<li className="d-none d-xl-inline-block p-2">
									<a href="#">Page</a>
								</li>
								<li className="d-none d-xl-inline-block p-2">
									<a href="#services">Services</a>
								</li>
								<li className="d-none d-xl-inline-block p-2">
									<a href="#">Testimonials</a>
								</li>
								<li className="d-none d-xl-inline-block p-2">
									<a href="#">Contant</a>
								</li>
								<li className="d-none d-xl-inline-block p-2">
									<a href="#" className="font-color-pink">Buy Now</a>
								</li>
							</ul>
						</div>
						<div className="d-block d-xl-none">
							<img src={ bars } alt="" onClick={ handleOpenMenu } className="menu"/>
						</div>
					</div>
				</div>
          </nav>
        </header>
		<nav id="navigation" className="navigation nav-active d-flex justify-content-center align-items-center">
			<img src={ cross } alt="Close" onClick={ handlCloseMenu } className="close"/>
			<ul className="list-unstyled text-center">
				<li className="p-2">
					<a href="#">Home</a>
				</li>
				<li className="p-2">
					<a href="#">Blog</a>
				</li>
				<li className="p-2">
					<a href="#">Page</a>
				</li>
				<li className="p-2">
					<a href="#services">Services</a>
				</li>
				<li className="p-2">
					<a href="#">Testimonials</a>
				</li>
				<li className="p-2">
					<a href="#">Contant</a>
				</li>
				<li className="p-2">
					<a href="#" className="font-color-pink">Buy Now</a>
				</li>
			</ul>
		</nav>
      </>);
}

export default Header;
