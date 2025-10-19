import React from "react";
import { Link } from "react-router";

const DetailsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="space-y-5">
      <img
        className="w-full h-fit object-cover rounded-xl"
        src={news.image_url}
        alt=""
      />
      <h1 className="text-2xl font-bold"> {news.title} </h1>
      <h3> {news.details} </h3>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        🔙 Back to category
      </Link>
    </div>
  );
};

export default DetailsCard;
