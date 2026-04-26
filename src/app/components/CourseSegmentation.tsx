import Image from "next/image";

export default function CourseSegmentation() {
  const courses = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Tailored <span className="text-blue-600">Course Segmentation</span>
        </h2>
        <p className="mt-3 text-gray-600">
          Explore <span className="text-blue-600">Custom-fit Courses</span>{" "}
          Designed to Address Every Professional Focus
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 font-bold rounded-xl shadow-md overflow-hidden transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden w-full h-40">
                <img src={item.img} alt={item.title} className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-blue-600 font-extrabold text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
