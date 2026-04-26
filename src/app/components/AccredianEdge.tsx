export default function AccredianEdge() {
  return (
    <section id="edgeSect" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>

        <p className="mt-1 font-bold text-gray-600">
          Key Aspects of{" "}
          <span className="text-blue-600">Our Strategic Training</span>
        </p>

        <div className="mt-12 flex justify-center">
          <picture>
            {/* Mobile */}
            <source
              media="(max-width: 768px)"
              srcSet="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg"
            />

            {/* Desktop */}
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
              alt="Accredian Edge Diagram"
              className="rounded-2xl object-contain w-full max-w-[1200px]"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
