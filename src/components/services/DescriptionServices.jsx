
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";

const DescriptionServices = () => {
  const services = [
    {
      title: "Software and Application Development",
      details: [
        "Web Applications: Creation of platforms accessible from web browsers.",
        "Custom Software: Tailored solutions based on client needs.",
        "AI: AI solution for broadcasters, OTTs, telcos and media companies that support better business decisions and drives experience improvements. The ability to harness data across various platforms and services used in the video delivery stack will become increasingly important to best support technical, operations and business departments inside your business.",
        "Immersive Tecnhilogy: Our solutions deliver the most immersive experience seamlessly across Virtual Reality (VR), Mobile, Web and Augmented Reality (AR) platforms. The center is tasked with developing high-concept content, platforms and technology",
        "Enterprise Systems (CMS, CDN, DRM) : Tools for internal business management."
      ]
    },
    {
      title: "Technology Consulting",
      details: [
        "Analysis and definition of software requirements.",
        "Digital strategy and technology transformation.",
        "Optimization and modernization of existing systems.",
        "Monitoring and optimization of applications.",
        "Issue resolution and software updates."
      ]
    },
    {
      title: "OTT Solution",
      details: [
        "Intec View: A platform to record and monitor broadcast and OTT feeds for compliance, quality, ad-verification, content clipping and media sharing. Records all media including programming, promos and ads. Collaborate and share content from any place at any time with a web-based interface. Today the platform is used to record more than 80 channels in Argentina, Brazil, Mexico and USA.",
        "Media Processing: We offer a set of tools for integrated ingest, mastering, automated QC, review and transcoding functionality. The unique IGS technology plays an important role by bridging the gap across a wide range of platforms, channels and formats, with cross-vendor compatible systems.",
        "Cloud: Professional video editing software for collaborative productions and remote workflows. Save time and money and increase creativity. Most advanced cloud-based video post-production platform and the solution of choice for professional video makers in broadcast, sport, news, corporate and education industries across the globe."
      ]
    },
   
  ];
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 green-text">IT Services</h2>
      <div className="accordion" id="servicesAccordion">
        {services.map((service, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button green-background"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {service.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#servicesAccordion"
            >
              <div className="accordion-body green-accordion-body">
                <ul>
                  {service.details.map((detail, i) => (
                    <li key={i} className="green-text">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default DescriptionServices;
