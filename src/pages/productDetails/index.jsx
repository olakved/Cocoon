import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HeaderDashboard from "../../components/common/headerDashboard";

function ProductDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["products"], () =>
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => res.data)
  );
  console.log(data);

  const navigate = useNavigate();

  //   const {
  //     isLoading: catergoryLoading,
  //     error: categoryError,
  //     data: categories,
  //   } = useQuery(["products"], () =>
  //     axios
  //       .get(`https://dummyjson.com/products/category/${data?.category}`)
  //       .then((res) => res.data)
  //   );

  //   console.log(categories, "jjjjjjjjjj");
  return (
    <div>
      <div>
        <HeaderDashboard />
      </div>
      <div className="p-4">
        <button
          className="px-4 text-white bg-light-green rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className=" py-10 px-16 sm:py-2 sm:px-5">
        <div className="flex justify-center items-start gap-x-10 sm:flex-col ">
          <div className=" w-1/2 mt-10 sm:w-full sm:mb-4">
            <img src={data?.images[0]} alt="" className="" />
          </div>
          <div className="w-1/2 sm:w-full">
            <div className="border-b-2 pb-3">
              <h1 className="font-bold text-2xl">
                {data?.brand} - {data?.title}
              </h1>
              <p className="text-sm mt-2">Category: {data?.category}</p>
            </div>
            <div className="flex gap-x-3 p-7 border-b-2">
              <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
              <p>({data?.rating} Rating)</p>
            </div>
            <div className="flex items-center gap-x-4 p-7 border-b-2">
              <p className="font-bold text-2xl ">${data?.price}.00</p>
              <button className="px-9 py-1 rounded-lg text-white text-md hover:bg-dark-green bg-light-green">
                Buy
              </button>
            </div>
            <div className="p-7 flex gap-x-4 border-b-2">
              <p>Status</p>
              <p className="font-bold">{data?.stock} Pcs. in Stock</p>
            </div>
            <div className="p-7 border-b-2">
              <p className="text-3xl mb-3">Description:</p>
              <p>
                {data?.description} <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consequat mattis tincidunt. Fusce in libero vitae nisi ornare
                varius ut eget magna.
              </p>
            </div>
            <div className="p-7 flex gap-x-4">
              <p>Sold by:</p>
              <p className="font-bold">DASWE Global Ltd.</p>
            </div>
            <div className="p-7">
              <button className="px-9 py-3 rounded-lg text-white text-md bg-light-green hover:bg-dark-green">
                Submit Your Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
