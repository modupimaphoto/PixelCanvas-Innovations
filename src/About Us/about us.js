import './about us.css';

const AboutUs = () => {

    return (
        <>
            <section className="about-us-wrapper bg-black text-white p-2 p-md-5">
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
        </>
    );
}

export default AboutUs;
