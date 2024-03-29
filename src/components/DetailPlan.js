import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, json } from "react-router-dom";

export default function DetailPlan() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user ID from localStorage
    const userId = localStorage.getItem("token");
    console.log(userId);

    // Check if userId exists
    if (userId !== null) {
      // Make API request to fetch user data based on userId
      axios
        .get(`http://localhost:4000/api/v1/user/getPlanDetails/${userId}`)
        .then((response) => {
          // Assuming your API returns user data
          setUserData(response.data.subscription);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="bg-gray-100 h-screen">
      {userData ? (
        <div className="flex flex-col items-center md:flex-row md:space-y-0 md:space-x-16 md:my-0  ">
          <div className="h-[16rem] w-full relative flex flex-col justify-center items-center">
            <div className="overflow-hidden z-10 rounded-full w-36 h-36 absolute top-14 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvQOJ1OBeXgWiZvWfnivd3nXD18yps3wYuA&usqp=CAU"
                alt="plate"
              />
            </div>
            <div className="h-[8rem] w-full bg-green-700"></div>
            <div className="h-[8rem] w-full bg-gray-100"></div>
          </div>
          <h1 className="text-5xl font-semibold text-gray-600 -mt-6 z-10">
            Plan details
          </h1>
          {/* <!-- Inner Container --> */}{" "}
          <div className="flex flex-col my-6 w-full space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0 mb-5 ">
            {/* Card Start */}{" "}
            <div className=" rounded-xl text-black  ">
              {/* <!-- Upper Container --> */}{" "}
              <div className="p-8 mt-3 h-full rounded-3xl bg-slate-100 shadow-2xl  flex flex-col">
                {" "}
                <ul className="divide-y divide-gray-300">
                  <li
                    key={userData._id}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-xl font-semibold leading-6 text-gray-900">
                          Plan Type
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-lg leading-6 text-gray-900">
                        {userData.planType.toUpperCase()}
                      </p>
                    </div>
                  </li>
                  <li
                    key={userData._id}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-xl font-semibold leading-6 text-gray-900">
                          Meal Count
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-lg leading-6 text-gray-900">
                        {userData.MealCount}
                      </p>
                    </div>
                  </li>
                  <li
                    key={userData._id}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-xl font-semibold leading-6 text-gray-900">
                          Start Date
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-lg leading-6 text-gray-900">
                        {userData.startDate.slice(0, 10)}
                      </p>
                    </div>
                  </li>
                  <li
                    key={userData._id}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-xl font-semibold leading-6 text-gray-900">
                          Plan
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-lg leading-5 text-black">Active</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
