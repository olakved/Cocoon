import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { source } = useParams();

  const { isLoading, error, data } = useQuery(["blogpost"], () =>
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=982bb4f800184deab23f0a93423b0aea`
      )
      .then((res) => res.data)
  );
  console.log(data, "+++++++++");

  return (
    <div className="bg-[red] h-full">
      <h1>BlogDetails</h1>
    </div>
  );
}

export default BlogDetails;
