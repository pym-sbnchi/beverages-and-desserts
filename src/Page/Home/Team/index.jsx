import React from "react";

export default function Team() {
  return (
    <>
      <h2 className="text-center my-5">Our best chef</h2>
      <div className="d-flex flex-row gap-5 p-5 bg-black text-white">
        <div>
          <img
            className="w-100 rounded-circle"
            src="./image/chef-1.jpg"
            alt=""
          />
          <p className="text-center my-3 fs-2">best chef</p>
        </div>
        <div>
          <img
            className="w-100 rounded-circle"
            src="./image/chef-2.jpg"
            alt=""
          />
          <p className="text-center my-3 fs-2">best chef</p>
        </div>
        <div>
          <img
            className="w-100 rounded-circle"
            src="./image/chef-3.jpg"
            alt=""
          />
          <p className="text-center my-3 fs-2">best chef</p>
        </div>
      </div>
    </>
  );
}
