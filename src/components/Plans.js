import React from "react";
import { Link } from "react-router-dom";

export default function Plans() {
  return (
    //  <!-- Global Container -->
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 mb-11 md:flex-row md:space-y-0 md:space-x-16 md:my-0 ">
      {/* <!-- Inner Container --> */}
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* Second Card */}
        <div className="bg-violet-600 rounded-xl text-white">
          {/* <!-- Upper Container --> */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Standard</div>
            <h2 className="mt-10 font-serif text-5xl text-center">
              Lunch / Dinner
            </h2>
            <h3 className="mt-2 text-center">One Time Tiffin</h3>
            <h3 className="mt-2 text-center">RS 1800/Month</h3>
            <div className="flex justify-center">
              <Link
                to="#"
                className="inline-block px-10 py-3 my-6 text-center
                            border border-violet-600 rounded-lg hover:bg-violet-800 bg-violet-600
                            hover:border-violet-800 duration-200"
              >
                Purchase
              </Link>
            </div>
          </div>
          <div className="p-1 mx-3 mb-4 rouded-b-xl"></div>
        </div>
      </div>

      {/* New Card  */}
      {/* <!-- Inner Container --> */}
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0 mb-20">
        {/* Second Card */}
        <div className="bg-orange-600 rounded-xl text-white">
          {/* <!-- Upper Container --> */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Premium</div>
            <h2 className="mt-10 font-serif text-5xl text-center">
              Lunch & Dinner
            </h2>
            <h3 className="mt-2 text-center">Two Time Tiffin</h3>
            <h3 className="mt-2 text-center">Rs 3300/Month</h3>
            <div className="flex justify-center">
              <Link
                to="#"
                className="inline-block px-10 py-3 my-6 text-center
                            border border-orange-600 rounded-lg hover:bg-orange-800 bg-orange-600
                            hover:border-orange-800 duration-200"
              >
                Purchase
              </Link>
            </div>
          </div>
          <div className="p-1 mx-3 mb-4 rouded-b-x"></div>
        </div>
      </div>
    </div>
  );
}
