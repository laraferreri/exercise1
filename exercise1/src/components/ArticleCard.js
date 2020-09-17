import React from "react";

import { link } from "react-router-dom";

function ArticleCard({ articleData }) {
  return (
    <div>
      <div className="ArticleCard">
        <div className="ArticleCardImage"></div>
        <img src={articleData.img.url} alt={srticleData.image.alt} />
        <h2> {articleData.title} </h2>
        <p>{date}</p>
        <p>{articleData.blurb}</p>
        <link to={"/article/${articleData.id}"}> Read More </link>
      </div>
    </div>
  );
}

export default ArticleCard;
