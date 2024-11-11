"use client";

import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function InquiryModal() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "bd4e14f4-71e5-4782-806d-6d74d43ad891");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setShowModal(!showModal);
      formRef.current?.reset();
      Swal.fire({
        title: "Thanks",
        text: "We will contact you soon",
        icon: "success",
        background: "#000",
        color: "#fff",
        didOpen: () => {
          const popup = Swal.getPopup();
          if (popup) {
            popup.style.border = "1px solid #fff";
          }
        },
      });
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div
        className={`fixed ${
          showModal ? "top-[20%]" : "top-[50%]"
        } z-30 right-0 flex items-center`}
      >
        <p
          className="text-white font-medium text-lg bg-black -rotate-90 -mr-[24px] py-1 px-3 rounded-t-md cursor-pointer"
          onClick={handleModal}
        >
          Enquiry
        </p>
        <div
          className={`bg-white p-6 rounded-md ${
            showModal ? "block" : "hidden"
          }`}
        >
          <form
            action="https://api.web3forms.com/submit"
            onSubmit={onSubmit}
            ref={formRef}
          >
            <input
              type="hidden"
              name="access_key"
              value="bd4e14f4-71e5-4782-806d-6d74d43ad891"
            />
            <div className="relative mb-4">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Name{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 
                    5.08594L0.894886
                     4.14134L2.77415 3.18182L0.894886 2.2223L1.43679
                      1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 
                      2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838
                       4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                // id="default-search"
                name="name"
                // value={values.name}
                // onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal 
                shadow-xs text-gray-900 bg-transparent border border-gray-300 
                rounded-full placeholder-gray-400 focus:outline-none "
                placeholder="Name"
              />
            </div>
            <div className="relative mb-4">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Email{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 
                    5.08594L0.894886 4.14134L2.77415 3.18182L0.894886
                     2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 
                     0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838
                      2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 
                      5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                // id="default-search"
                name="email"
                // value={values.email}
                // onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 leading-7 
                text-base font-normal shadow-xs text-gray-900 
                bg-transparent border border-gray-300 rounded-full
                 placeholder-gray-400 focus:outline-none "
                placeholder="name@pagedone.com"
              />
            </div>
            <div className="relative mb-4">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Mobile{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679
                     5.08594L0.894886
                     4.14134L2.77415 3.18182L0.894886 
                    2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 
                    0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 
                    2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 
                    5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                // id="default-search"
                name="phone"
                // value={values.phone}
                // onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 
                leading-7 text-base font-normal shadow-xs
                 text-gray-900 bg-transparent border border-gray-300 rounded-full
                  placeholder-gray-400 focus:outline-none "
                placeholder="name@pagedone.com"
              />
            </div>
            <div className="relative mb-4">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Message{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 
                    5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 
                    2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659
                     2.41619L5.86648 1.2777L6.40838 2.2223L4.52912
                      3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 
                      3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  ></path>
                </svg>
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <textarea
                    name="message"
                    // value={values.message}
                    // onChange={handleChange}
                    className="block w-full h-16 px-4 py-2.5 text-base leading-7 
                    font-normal shadow-xs text-gray-900 bg-transparent border
                     border-gray-300 rounded-2xl placeholder-gray-400 
                     focus:outline-none resize-none"
                    placeholder="Write a message..."
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              type="submit"
              // onClick={onSubmit}
              className="w-full h-12 bg-indigo-600
             hover:bg-indigo-800 transition-all duration-
             700 rounded-full shadow-xs text-white
              text-base font-semibold leading-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
