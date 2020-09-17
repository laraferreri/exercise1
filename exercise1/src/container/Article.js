import React from "react";

import { useParams } from "react-router-dom";

function Article() {
  let { id } = useParams();
  return (
    <secton>
      <h1> Article </h1>
      <p>{id}</p>
    </secton>
  );
}

export default Article;
