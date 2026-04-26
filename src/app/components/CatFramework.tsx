export default function CatFramework() {
  return (
    <section id="catSect" className="w-full bg-[#F3F8FF] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>
        <p className="mt-3 text-gray-600">
          Our Proven Approach to{" "}
          <span className="text-blue-600">Learning Excellence</span>
        </p>
        <div className="mt-12 flex justify-center">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
            alt="CAT Framework"
            width={1000}
            loading="lazy"
            height={400}
            className="rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
