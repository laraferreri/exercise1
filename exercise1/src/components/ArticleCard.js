import React from "react";

import { Link } from "react-router-dom";

function ArticleCard({ articleData }) {
  return (
    <div>
      <div className="ArticleCard">
        <div className="ArticleCardImage">
          <img src={articleData.image.url} alt={articleData.image.alt} />
        </div>
        <h2> {articleData.title} </h2>
        <p>{articleData.blurb}</p>
        <Link to={"/article/${articleData.id}"}> Read More </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
