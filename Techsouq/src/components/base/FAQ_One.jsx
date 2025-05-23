import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import message from "/src/assets/Images/Group.png";
import arrow from "/src/assets/Images/arrow-right.png";

const FAQ_One = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with a diverse range of industries, including e-commerce, technology, healthcare, education, and startups. Our flexible approach allows us to tailor solutions for businesses.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide web development, UI/UX design, branding, SEO optimization, and digital marketing services to help businesses grow online.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline varies depending on the complexity of the project. On average, a website can take 4-8 weeks, while larger applications may take longer.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer maintenance and support plans to ensure your website remains updated and secure.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Absolutely! We can revamp your website to enhance its design, functionality, and user experience.",
    },
    {
      question: "Do you work with small businesses and startups?",
      answer:
        "Yes, we love working with startups and small businesses, helping them establish a strong online presence.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="container mx-auto px-4 py-16 font-poppins"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Heading */}
      <div className="flex justify-center align-center">
        <h4
          className="relative inline-block text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2"
          style={{ position: "relative" }}
        >
          What We Says
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, #9384Ef, #312EFE)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          ></span>
        </h4>
      </div>
      <h2 className="text-4xl font-semibold text-center mb-6 mt-5">
        Frequently Asked Questions
      </h2>

      {/* FAQ & Maintenance Card Row */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* FAQ Accordion */}
        <div className="flex-1 flex flex-col items-start gap-4 max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full rounded-sm">
              {/* Question */}
              <button
                className={`flex items-center justify-between w-full p-4 shadow-md cursor-pointer transition-all duration-300 border-2 relative bg-white rounded-[12px] font-poppins 
                  ${
                    openIndex === index
                      ? "border-transparent"
                      : "border-gray-300"
                  }`}
                onClick={() => toggleFAQ(index)}
                style={{
                  borderImage:
                    openIndex === index
                      ? "linear-gradient(to right, #9384Ef, #312EFE) 1"
                      : "",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "12px",
                }}
              >
                <h3
                  className={`text-base transition-colors duration-300 font-poppins ${
                    openIndex === index
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE]"
                      : "text-black"
                  }`}
                  style={{ fontWeight: "600" }}
                >
                  {faq.question}
                </h3>

                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform transform ${
                    openIndex === index ? "rotate-[45deg]" : "rotate-[-60deg]"
                  } bg-gradient-to-r from-[#9384Ef] to-[#312EFE] p-2`}
                >
                  <ArrowRightIcon className="w-5 h-5 text-white" />
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 bg-white rounded-[12px] font-poppins ${
                  openIndex === index ? "max-h-40 mt-2 p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Card */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-[#9384Ef] to-[#312EFE] rounded-xl text-white p-10 shadow-lg h-fit mt-6 md:mt-0 text-center w-full max-w-md mx-auto">
          <img src={message} className="mb-4" />

          <h3 className="text-2xl font-semibold mb-3">
            Do you provide maintenance & updates after project delivery?
          </h3>

          <p className="text-lg leading-relaxed">
            Learn How Our Expertise Can Drive Your Business Forward
            <br />
            <br />
            <span className="bg-white rounded-lg text-center p-5 inline-flex">
              <button className="h-[30px] w-[271px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] text-sm flex items-center justify-center gap-2">
                <Link to="/contact">Book your free call now</Link>
                <img src={arrow} alt="arrow" className="h-5 w-5" />
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ_One;
