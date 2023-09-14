import MailSVG from "@public/mail.svg";
import { Form, FormikProvider, useFormik } from "formik";
import { FormEventHandler, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import ThankYouForContacting from "./ThankYouForContacting";

function ContactMe() {
  const [openContactMeModal, setopenContactMeModal] = useState(false);
  const [openThankYouModal, setopenThankYouModal] = useState(false);

  const ValidationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full name is required")
      .max(255, "Maximum full name length should be 255 characters"),

    companyName: Yup.string()
      .required("Company name is required")
      .max(255, "Maximum company name length should be 255 characters"),

    purpose: Yup.string()
      .required("Purpose is required")
      .max(255, "Maximum Purpose length should be 255 characters"),

    preferredCommunicationChannel: Yup.string()
      .required("Preferred communication channel is required")
      .max(
        255,
        "Maximum preferred communication channel length should be 255 characters"
      ),

    communicationChannelUsername: Yup.string()
      .required("Communication channel username is required")
      .max(
        255,
        "Maximum communication channel username length should be 255 characters"
      ),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      purpose: "",
      preferredCommunicationChannel: "",
      communicationChannelUsername: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      setSubmitting(true);

      console.log(values);

      try {
        console.log(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/contact`);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/contact`,
          values
        );

        if (response.data.message == "Contact request created successfully") {
          setopenContactMeModal(false);
          setopenThankYouModal(true);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    values,
  }: {
    errors: any;
    touched: any;
    handleSubmit: any;
    isSubmitting: boolean;
    getFieldProps: Function;
    values: any;
  } = formik;

  return (
    <div className="ms-4">
      <button
        className="px-4 py-2 font-bold text-white bg-teal-600 rounded hover:bg-teal-700"
        onClick={() => {
          setopenContactMeModal(true);
        }}
      >
        <MailSVG
          className="inline-block mb-1 mr-1 fill-white"
          width={20}
          height={20}
          alt="hello icon"
        />{" "}
        Say Hello
      </button>

      {/* Contact me popup */}
      <div
        className={` ${
          openContactMeModal
            ? "relative z-10 duration-200 ease-in opacity-100"
            : "hidden z-10 duration-300 ease-out opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <FormikProvider value={formik}>
          <form onSubmit={handleSubmit}>
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                <div className="relative overflow-hidden text-left transition-all transform rounded-lg shadow-xl modalBackground sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="pt-5 pb-4 modalBackground sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="w-full mt-3">
                        <h3 className="mb-6 text-2xl font-semibold leading-6 text-slate-300">
                          Contact Me
                        </h3>
                        <div className="mt-2">
                          {/* Full Name */}
                          <div className="mb-5">
                            <input
                              type="text"
                              {...getFieldProps("fullName")}
                              placeholder="Enter your full name"
                              className="block w-full p-3 border-0 border-none rounded-md text-slate-200 focus:outline-slate-500 focus:outline-2 bg-slate-800"
                            />
                            <span
                              className={`${
                                Boolean(touched.fullName && errors.fullName)
                                  ? "block text-red-500 mt-1"
                                  : "hidden"
                              }`}
                            >
                              {errors.fullName}
                            </span>
                          </div>

                          {/* Company Name */}
                          <div className="mb-5">
                            <input
                              type="text"
                              {...getFieldProps("companyName")}
                              placeholder="Your company name (Apple, Self, None etc)"
                              className="block w-full p-3 border-0 border-none rounded-md text-slate-200 focus:outline-slate-500 focus:outline-2 bg-slate-800"
                            />
                            <span
                              className={`${
                                Boolean(
                                  touched.companyName && errors.companyName
                                )
                                  ? "block text-red-500 mt-1"
                                  : "hidden"
                              }`}
                            >
                              {errors.companyName}
                            </span>
                          </div>

                          {/* Purpose */}
                          <div className="mb-5">
                            <select
                              {...getFieldProps("purpose")}
                              className="block w-full p-3 border-0 border-none rounded-md text-slate-200 focus:outline-slate-500 focus:outline-2 bg-slate-800"
                            >
                              <option value="">Select purpose</option>
                              <option
                                value="Interested in creating an MVP (Minimum Viable
                                Product)"
                              >
                                Interested in creating an MVP (Minimum Viable
                                Product)
                              </option>
                              <option value="Seeking a web developer to join our team">
                                Seeking a web developer to join our team
                              </option>
                              <option
                                value="Need assistance in resolving a few bugs in an
                                existing product"
                              >
                                Need assistance in resolving a few bugs in an
                                existing product
                              </option>
                              <option
                                value="Interested in consulting with an expert for
                                advice"
                              >
                                Interested in consulting with an expert for
                                advice
                              </option>
                            </select>
                            <span
                              className={`${
                                Boolean(touched.purpose && errors.purpose)
                                  ? "block text-red-500 mt-1"
                                  : "hidden"
                              }`}
                            >
                              {errors.purpose}
                            </span>
                          </div>

                          {/* Preferred communication channel */}
                          <div className="mb-5">
                            <select
                              {...getFieldProps(
                                "preferredCommunicationChannel"
                              )}
                              className="block w-full p-3 border-0 border-none rounded-md text-slate-200 focus:outline-slate-500 focus:outline-2 bg-slate-800"
                            >
                              <option value="">
                                Preferred communication channel
                              </option>
                              <option value="Telegram">Telegram</option>
                              <option value="Email">Email</option>
                            </select>
                            <span
                              className={`${
                                Boolean(
                                  touched.preferredCommunicationChannel &&
                                    errors.preferredCommunicationChannel
                                )
                                  ? "block text-red-500 mt-1"
                                  : "hidden"
                              }`}
                            >
                              {errors.preferredCommunicationChannel}
                            </span>
                          </div>

                          {/* Communication Channel Username */}
                          {values.preferredCommunicationChannel != "" && (
                            <div className="mb-5">
                              <input
                                type="text"
                                {...getFieldProps(
                                  "communicationChannelUsername"
                                )}
                                placeholder={
                                  values.preferredCommunicationChannel ==
                                  "Telegram"
                                    ? "Enter you telegram username (Example: @username)"
                                    : values.preferredCommunicationChannel ==
                                      "Email"
                                    ? "Enter your email address"
                                    : "Enter your telegram username or email address"
                                }
                                className="block w-full p-3 border-0 border-none rounded-md text-slate-200 focus:outline-slate-500 focus:outline-2 bg-slate-800"
                              />
                              <span
                                className={`${
                                  Boolean(
                                    touched.communicationChannelUsername &&
                                      errors.communicationChannelUsername
                                  )
                                    ? "block text-red-500 mt-1"
                                    : "hidden"
                                }`}
                              >
                                {errors.communicationChannelUsername}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 modalBackground sm:flex sm:flex-row-reverse sm:px-6">
                    {errors.afterSubmit && (
                      <div className="alert alert-danger" role="alert">
                        {errors.afterSubmit}
                      </div>
                    )}

                    <button
                      disabled={Object.keys(errors).length != 0}
                      type="submit"
                      className={`inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm sm:ml-3 sm:w-auto ${
                        Object.keys(errors).length != 0
                          ? "bg-teal-400/30"
                          : "bg-teal-600 hover:bg-teal-500 cursor-pointer"
                      }`}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold bg-white rounded-md shadow-sm text-slate-800 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setopenContactMeModal(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </FormikProvider>
      </div>

      {/* Thank you popup */}
      <ThankYouForContacting
        openThankYouModal={openThankYouModal}
        setopenThankYouModal={setopenThankYouModal}
      />
    </div>
  );
}

export default ContactMe;
