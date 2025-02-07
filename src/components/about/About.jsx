
import "./about.css"
import { Image } from "react-bootstrap"
export const About = () => {
  return (
    <div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="display-4 text-center mb-4">About Us</h2>
          <p className="text-center">
          We are obsessed on helping M&E Corporations thrive in the digital economy.
          <br/> We offer video systems development, integration, consultancy and media service to the biggest Media & Entertainment corporations. We span the entire digital media lifecycle and platforms, including video ingest; live and on-demand encoding, transcoding; captioning and subtitling; playback and monitoring, delivery, and live streaming; as well as automation of the entire media workflow.
          </p>
          <hr className="my-4" />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2 className=" display-4 text-center mb-4">Who We Are</h2>
          <p className="text-center"></p>

          <div className="card-deck">
                {/* Tarjeta 1*/}
                <div className="card">
                <Image src="/d.png" thumbnail alt="CEO"  className="card-img-top"/> 
                    <div className="card-body">
                        <h3 className="card-title text-center">Diego Tanoira</h3>
                        <p className="card-text text-center"> CEO</p>

                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="card">
                <Image src="/l.png" thumbnail alt="COO"  className="card-img-top"/> 
                    <div className="card-body">
                        <h3 className="card-title text-center">Lucas Costantini</h3>
                        <p className="card-text text-center">
                      COO
                        </p>
                       
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="card mx-auto">
                <Image src="/m.png" thumbnail alt="CTO"  className="card-img-top"/> 
                    <div className="card-body">
                        <h3 className="card-title text-center">Mateo Costantini</h3>
                        <p className="card-text text-center">CTO </p>
                       
                    </div>
                </div>

              
            </div>
            <br />
        </div>

          
        </div>
      </div>
    </div>

  
  )
}
export default About