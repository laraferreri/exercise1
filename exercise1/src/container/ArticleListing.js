import React from "react";
//component imports
import ArticleCard from "../components/ArticleCard";
// data imports
import data from "../components/data";

function ArticleListing() {
  // props=properties  = sends data through the flow of the components
  return (
    <main className="ArticleListing">
      <header>
        <h1> Article </h1>
      </header>
      {data.map((article, i) => (
        <ArticleCard key={i} articleData={article} />
      ))}
    </main>
  );
}

export default ArticleListing;
