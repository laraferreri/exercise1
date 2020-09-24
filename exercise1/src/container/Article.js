import React from "react";

import { useParams } from "react-router-dom";

import Data from "../components/data";

function Article() {
  let { id } = useParams();

  const (!articleData) return null;

  return (
    <secton>
      <h1> {articleData.title} </h1>
      <p>{articleData.publishedDate}</p>
      <p>{article.Data.blurb}</p>
      </div>
      <article>{articleData.articleText.Map((article, i) =>{
        return <p key= {i}>{article.data}</p>;
      })}
        </article>
    </secton>
  );
}

export default Article;
