import React from "react";

function ThankYouForContacting({
  openThankYouModal,
  setopenThankYouModal,
}: {
  openThankYouModal: boolean;
  setopenThankYouModal: Function;
}) {
  return (
    <div
      className={` ${
        openThankYouModal
          ? "relative z-10 duration-200 ease-in opacity-100"
          : "hidden z-10 duration-300 ease-out opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <div className="relative overflow-hidden text-left transition-all transform rounded-lg shadow-xl modalBackground sm:my-8 sm:w-full sm:max-w-lg">
            <div className="pt-5 pb-4 modalBackground sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="w-full mt-3">
                  <h3 className="mb-2 text-2xl font-semibold text-slate-300">
                    Thank you for contacting me!
                  </h3>

                  <h3 className="mb-4 font-semibold leading-6 text-slate-400">
                    Your message has reached me, and I appreciate your outreach.
                    I will contact you in next{" "}
                    <span className="font-bold text-teal-400">24 hours</span>
                  </h3>

                  <h3 className="font-semibold leading-6 text-slate-400">
                    You can reach me at my telegram username{" "}
                    <a
                      href="https://t.me/riddhesh24"
                      className="inline-block text-teal-400"
                    >
                      @riddhesh24
                    </a>{" "}
                    or via email at{" "}
                    <a
                      href="mailto:riddhesh.maha@gmail.com"
                      className="inline-block text-teal-400"
                    >
                      riddhesh.maha@gmail.com
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full px-4 py-8 modalBackground flex justify-center ">
              <button
                type="button"
                className="px-10 py-3 text-sm font-semibold bg-white rounded-md shadow-sm text-slate-800 hover:bg-gray-300"
                onClick={() => {
                  setopenThankYouModal(false);
                }}
              >
                Sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouForContacting;
