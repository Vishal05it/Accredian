export default function Partners() {
  const logos = [
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
  ];

  return (
    <section id="clientsSect" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>
        <p className="mt-3 text-gray-600">
          Successful Collaborations With the{" "}
          <span className="text-blue-600">Industry’s Best</span>
        </p>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-25 h-16 flex items-center gap-8 opacity-80 hover:grayscale-0 hover:opacity-100 transition"
            >
              <img src={logo} alt="partner" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
