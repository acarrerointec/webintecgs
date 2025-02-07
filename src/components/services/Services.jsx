import Image from 'react-bootstrap/Image';
import './services.css'
const Services = () => {
    return (
        <div>
            <br />
            <div className="card-deck">
                {/* Tarjeta 1*/}
                <div className="card text-centet">
                <Image src="/Ott.png" thumbnail alt="OTT"  className="card-img-top"/> 
                    <div className="card-body">
                        <h3 className="card-title text-center">OTT SOLUTIONS</h3>
                        <p className="card-text">
                            We offer integrated, turnkey solutions for businesses to manage, deliver, monetize and measure OTT live TV, subscription based or on-demand video on any device using the best in class technology. Our platform covers all the needs, from Ingest and transcoding, Video content management system (CMS), CDN, DRM, Online Video Player, Website and Apps for Mobile and TV.
                        </p>

                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="card">
                <Image src="/ai.png" thumbnail alt="AI"  className="card-img-top"/> 
                    <div className="card-body">
                        <h3 className="card-title text-center">AI</h3>
                        <p className="card-text">
                        AI solution for broadcasters, OTTs, telcos and media companies that support better business decisions and drives experience improvements. The ability to harness data across various platforms and services used in the video delivery stack will become increasingly important to best support technical, operations and business departments inside your business.
                        </p>
                       
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="card mx-auto">
                <Image src="/view.png" thumbnail alt="AI"  className="card-img-top"/> 
                    <div className="card-body">
                        <h3 className="card-title text-center">INTEC VIEW</h3>
                        <p className="card-text">
                        A platform to record and monitor broadcast and OTT feeds for compliance, quality, ad-verification, content clipping and media sharing. Records all media including programming, promos and ads. Collaborate and share content from any place at any time with a web-based interface. Today the platform is used to record more than 80 channels in Argentina, Brazil, Mexico and USA
                        </p>
                       
                    </div>
                </div>

              
            </div>
            <br />
        </div>
    )
}

export default Services
