
import 'bootstrap/dist/css/bootstrap.min.css';
import OttImage from './imagen/Ott.png'; // Ajusta la ruta según tu estructura de archivos
import AiImage from './imagen/ai.png';   // Ajusta la ruta
import ViewImage from './imagen/view.png'; // Ajusta la ruta

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Software and Application Development',
      description:
        'At Intecgs, we specialize in software development for the media and entertainment industry, focusing on streaming services, OTT solutions, mastering, and quality control (QC). Our tailored applications ensure seamless content management, high-performance delivery, and optimized workflows for a superior digital experience.',
      image: OttImage,
      alt: 'Soft',
    },
    {
      id: 2,
      title: 'Technology Consulting',
      description:
        'We optimize your digital transformation by leveraging the best strategies and agile methodologies to enhance software development, streamline workflows, and maximize efficiency. Our tailored solutions ensure scalability, security, and innovation for your business success.',
      image: AiImage,
      alt: 'AI',
    },
    {
      id: 3,
      title: 'Ott Solutions',
      description:
        'We offer integrated, turnkey solutions for businesses to manage, deliver, monetize and measure OTT live TV, subscription based or on-demand video on any device using the best in class technology. Our platform covers all the needs, from Ingest and transcoding, Video content management system (CMS), CDN, DRM, Online Video Player, Website and Apps for Mobile and TV.',
      image: ViewImage,
      alt: 'INTEC VIEW',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center my-5">Our Services</h1>
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.id}>
            <div className="card h-100">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.alt}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
              <div className="card-footer">
                <a href="/DescriptionServices" className="btn btn-outline-success">
                  Learn More
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;