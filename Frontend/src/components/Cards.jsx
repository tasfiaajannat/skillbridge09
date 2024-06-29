import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={item.image} alt="Course" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name} - {item.title}
            <div className="badge badge-secondary">Course</div>
          </h2>
          <p>{item.Description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}TK</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">
              Join class
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
