import React from "react";
import { Link } from "react-router-dom";
// import Plan1 from "./Plan1";

export default function Plans() {
  const premiumPlan = 3300;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-300 mb-11 md:flex-row md:space-y-0 md:space-x-16 md:my-0 backPic">
        {/* New Card  */}
        {/* <!-- Inner Container --> */}
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0 mb-5">
          {/* First Card */}
          <div className=" rounded-xl text-black ">
            {/* <!-- Upper Container --> */}
            <div className="p-8 mx-3 mt-3 rounded-3xl bg-slate-200 shadow-2xl shadow-black">
              <div className="text-center uppercase text-4xl font-extrabold text-gray-900">
                Premium
              </div>
              <h2 className="mt-10 font-serif text-5xl text-center font-semibold">
                Lunch & Dinner
              </h2>
              <h3 className="mt-2 text-center text-xl">
                Two Time Tiffin per day, Billed monthly.
              </h3>
              <h3 className="mt-2 text-center text-xl font-extrabold">
                {`Rs ${premiumPlan}/Month`}
              </h3>
              <div className="flex justify-center">
                <Link
                  to="#"
                  className="inline-block px-10 py-3 my-6 text-center text-white font-bold
                            border border-green-500 rounded-3xl w-full hover:bg-green-800 bg-green-500
                            hover:border-green-800 duration-200"
                >
                  Purchase
                </Link>
              </div>
            </div>
            {/* <div className="p-1 mx-3 mb-4 rouded-3xl"></div> */}
          </div>
          {/* <Plan1
            title="Lunch"
            description="Starting at $9.99"
            price="per day meal"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoked-salmon-quinoa-dill-lunch-pot-4b718ac.jpg?quality=90&resize=500,454"
          /> */}
        </div>

        {/* Second card starts from here */}
        {/* <!-- Inner Container --> */}
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0 mb-20">
          {/* Second Card */}
          <div className=" rounded-xl text-black ">
            {/* <!-- Upper Container --> */}
            <div className="p-8 mx-3 mt-3 rounded-3xl bg-slate-200 shadow-2xl shadow-black">
              <div className="text-center uppercase text-4xl font-extrabold text-gray-900">
                Premium
              </div>
              <h2 className="mt-10 font-serif text-5xl text-center font-semibold">
                Lunch / Dinner
              </h2>
              <h3 className="mt-2 text-center text-xl">
                One Time Tiffin per day, Billed monthly.
              </h3>
              <h3 className="mt-2 text-center text-xl font-extrabold">
                {`Rs ${premiumPlan}/Month`}
              </h3>
              <div className="flex justify-center">
                <Link
                  to="#"
                  className="inline-block px-10 py-3 my-6 text-center text-white font-bold
                            border border-green-500 rounded-3xl w-full hover:bg-green-800 bg-green-500
                            hover:border-green-800 duration-200"
                >
                  Purchase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Plans() {
//   return (
//     //  <!-- Global Container -->
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-300 mb-11 md:flex-row md:space-y-0 md:space-x-16 md:my-0 ">
//       {/* <!-- Inner Container --> */}
//       <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
//         {/* Second Card */}
//         <div className="bg-violet-600 rounded-xl text-white">
//           {/* <!-- Upper Container --> */}
//           <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
//             <div className="text-center uppercase">Standard</div>
//             <h2 className="mt-10 font-serif text-5xl text-center">
//               Lunch / Dinner
//             </h2>
//             <h3 className="mt-2 text-center">One Time Tiffin</h3>
//             <h3 className="mt-2 text-center">RS 1800/Month</h3>
//             <div className="flex justify-center">
//               <Link
//                 to="#"
//                 className="inline-block px-10 py-3 my-6 text-center
//                             border border-violet-600 rounded-lg hover:bg-violet-800 bg-violet-600
//                             hover:border-violet-800 duration-200"
//               >
//                 Purchase
//               </Link>
//             </div>
//           </div>
//           <div className="p-1 mx-3 mb-4 rouded-b-xl"></div>
//         </div>
//       </div>

//       {/* New Card  */}
//       {/* <!-- Inner Container --> */}
//       <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0 mb-20">
//         {/* Second Card */}
//         <div className="bg-orange-600 rounded-xl text-white">
//           {/* <!-- Upper Container --> */}
//           <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
//             <div className="text-center uppercase">Premium</div>
//             <h2 className="mt-10 font-serif text-5xl text-center">
//               Lunch & Dinner
//             </h2>
//             <h3 className="mt-2 text-center">Two Time Tiffin</h3>
//             <h3 className="mt-2 text-center">Rs 3300/Month</h3>
//             <div className="flex justify-center">
//               <Link
//                 to="#"
//                 className="inline-block px-10 py-3 my-6 text-center
//                             border border-orange-600 rounded-lg hover:bg-orange-800 bg-orange-600
//                             hover:border-orange-800 duration-200"
//               >
//                 Purchase
//               </Link>
//             </div>
//           </div>
//           <div className="p-1 mx-3 mb-4 rouded-b-x"></div>
//         </div>
//         <Plan1
//           title="Lunch"
//           description="Starting at $9.99"
//           price="per day meal"
//           image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoked-salmon-quinoa-dill-lunch-pot-4b718ac.jpg?quality=90&resize=500,454"
//         />
//       </div>
//     </div>
//   );
// }