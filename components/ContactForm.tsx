"use client";
import React, { useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import { ActionMeta, SingleValue, StylesConfig } from "react-select";
import { useRouter } from "next/navigation";
import countryList from "react-select-country-list";

const Select = dynamic(() => import("react-select"), { ssr: false });

interface OptionType {
  value: string;
  label: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  company: string;
  projectType: OptionType | null;
  projectBudget: OptionType | null;
  projectTimeline: OptionType | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  city?: string;
  country?: string;
  company?: string;
  projectType?: string;
  projectBudget?: string;
  projectTimeline?: string;
}

const ContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    company: "",
    projectType: null,
    projectBudget: null,
    projectTimeline: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const options = countryList().getData();

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone: string): boolean => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch {
      return false;
    }
  };

  const isValid = isPhoneValid(formData.phone);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (value: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  const handleSelectChange = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ): void => {
    const selectedOption = newValue as SingleValue<OptionType>;

    const fieldName = actionMeta.name as string;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: selectedOption,
    }));
  };

  // const handleCountryChange = (selectedOption: OptionType) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     country: selectedOption.label, // Update the country field directly
  //   }));
  // };

  const validateForm = () => {
    const formErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName) {
      formErrors.fullName = "Full Name is required.";
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || !isValid) {
      formErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.city) {
      formErrors.city = "Please enter City.";
    }
    if (!formData.country) {
      formErrors.country = "Please enter Country.";
    }

    if (!formData.projectType) {
      formErrors.projectType = "Project Type is required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_SERVICE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!;

      const projectTypeValue = formData.projectType
        ? formData.projectType.value
        : "";
      const projectBudgetValue = formData.projectBudget
        ? formData.projectBudget.value
        : "";
      const projectTimelineValue = formData.projectTimeline
        ? formData.projectTimeline.value
        : "";

      const templateParams = {
        from_fullName: formData.fullName,
        to_name: "CollabEZ",
        from_email: formData.email,
        from_phone: formData.phone,
        from_city: formData.city,
        from_country: formData.country,
        company: formData.company,
        projectType: projectTypeValue,
        projectBudget: projectBudgetValue,
        projectTimeline: projectTimelineValue,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          // console.log("Form Data", templateParams);
          // toast.success("Request submitted. We'll be in touch soon.");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            city: "",
            country: "",
            company: "",
            projectType: null,
            projectBudget: null,
            projectTimeline: null,
          });
          // setIsSubmitting(false);
          // router.push("/thank-you");
        })
        .catch((error) => {
          console.log("FAILED..", error);
          toast.error("Something Went Wrong!");
        })
        .finally(() => {
          setIsSubmitting(false);
          router.push("/thank-you");
        });
    }
  };

  const projectTypeOptions: OptionType[] = [
    { value: "Website Development", label: "Website Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "E-commerce Solutions", label: "E-commerce Solutions" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    {
      value: "Custom Software Development",
      label: "Custom Software Development",
    },
    { value: "Game Development", label: "Game Development" },
  ];
  const projectBudgetOptions: OptionType[] = [
    { value: "$1,000–$5,000", label: "$1,000–$5,000" },
    { value: "$5,000–$10,000", label: "$5,000–$10,000" },
    { value: "$10,000–$25,000", label: "$10,000–$25,000" },
    { value: "$25,000+", label: "$25,000+" },
  ];
  const projectTimelineOptions: OptionType[] = [
    {
      value: "We’re Ready to Start Immediately",
      label: "We’re Ready to Start Immediately",
    },
    { value: "Within 1-3 Months", label: "Within 1-3 Months" },
    { value: "Within 3-6 Months", label: "Within 3-6 Months" },
  ];

  const customStyles: StylesConfig<unknown, boolean> = {
    control: (provided) => ({
      ...provided,
      maxHeight: "56px",
      backgroundColor: "#FFFFFF05",
      border: "2px solid rgb(255 255 255 / 0.2)",
      padding: "0.35rem 1rem 0.4rem 1rem",
      borderRadius: "8px",
      color: "rgb(255 255 255 / 0.6)",
      outline: "none",
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      height: "auto",
      "&:hover": {
        border: "2px solid rgb(255 255 255 / 0.2)",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgb(255 255 255 / 0.6)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255 / 0.6)",
      paddingRight: "0.5rem",
      display: state.isDisabled ? "none" : "block",
    }),
    indicatorSeparator: () => ({ display: "none" }),

    menu: (provided) => ({
      ...provided,
      borderRadius: "0.375rem",
      border: "1px solid #38383856",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#272727",
      overflow: "hidden",
      position: "absolute",
      zIndex: 10000,
    }),

    menuList: (provided) => ({
      ...provided,
      maxHeight: "210px",
      overflowY: "auto",
      backgroundColor: "#272727",
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#272727",
        borderRadius: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#888888",
        borderRadius: "6px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#555555",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgb(0 0 0 / 0.6)"
        : state.isFocused
        ? "#3e3e3e"
        : "#272727",
      color: state.isSelected ? "white" : "#ffffff",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      overflowY: "auto",
      outline: "none",
      transition: "background-color 0.2s ease",
      "&:active": {
        backgroundColor: state.isFocused ? "rgb(0 0 0 / 0.6)" : "#3e3e3e",
      },
    }),
  };

  return (
    <div className="relative sm:px-10 px-5 sm:py-10 py-5 w-full " id="contact">
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full ">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full ">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto ">
            Let&apos;s Discuss Your Ideas
          </h3>
        </div>

        <div className="bg-gradient-to-r from-[#854CFF10] via-contactFormBg to-contactFormBg  w-full rounded-xl relative z-10 md:py-10 py-5 md:px-10 px-5 grid lg:grid-cols-1 grid-cols-1 gap-4">
          <div className="flex flex-col gap-4 h-full justify-start w-full">
            <div className="flex flex-col gap-1 mb-6">
              <p className="font-[family-name:var(--font-satoshi)] text-white/80 min-[540px]:text-lg text-base max-w-[410px]">
                Share your project details and let&apos;s get started.
              </p>
            </div>

            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => handleSubmit(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                  />
                  {errors.fullName && (
                    <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                      {errors.fullName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                  />
                  {errors.email && (
                    <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <PhoneInput
                    defaultCountry="pk"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Phone number"
                    className="w-full font-[family-name:var(--font-satoshi)] py-1.5 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none"
                  />
                  {errors.phone && (
                    <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                  />
                  {errors.city && (
                    <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                      {errors.city}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                  />
                  {/* <Select
                    name="country"
                    options={options}
                    onChange={(value) =>
                      handleCountryChange(value as OptionType)
                    }
                    placeholder="Select your country"
                    className="w-full font-[family-name:var(--font-satoshi)] "
                    styles={customStyles}
                  /> */}
                  {errors.country && (
                    <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                      {errors.country}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <Select
                    id="projectType-select"
                    name="projectType"
                    options={projectTypeOptions}
                    placeholder="Project Type"
                    value={formData.projectType}
                    styles={customStyles}
                    onChange={handleSelectChange}
                    className="w-full font-[family-name:var(--font-satoshi)]"
                    classNamePrefix="react-select"
                  />
                  {errors.projectType && (
                    <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                      {errors.projectType}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <Select
                    id="projectBudget-select"
                    name="projectBudget"
                    options={projectBudgetOptions}
                    placeholder="Project Budget"
                    value={formData.projectBudget}
                    styles={customStyles}
                    onChange={handleSelectChange}
                    className="w-full font-[family-name:var(--font-satoshi)]"
                    classNamePrefix="react-select"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Select
                  id="projectTimeline-select"
                  name="projectTimeline"
                  options={projectTimelineOptions}
                  placeholder="Project Timeline"
                  value={formData.projectTimeline}
                  styles={customStyles}
                  onChange={handleSelectChange}
                  className="w-full font-[family-name:var(--font-satoshi)]"
                  classNamePrefix="react-select"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#763AF5] to-[#A604F2] w-full py-3 px-6 rounded-lg font-[family-name:var(--font-satoshi-bold)] md:text-lg text-base font-bold "
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* <div className="lg:flex justify-center items-center hidden">
            <Image
              src="/contactImg.png"
              alt=""
              className=""
              width={550}
              height={550}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
