"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddProduct = () => {
  const [img, setImg] = useState(null);
  const [submitting, setIsSubmitting] = useState(false);
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nOshA6mLg5MpYUF9H-Jk3i2nnREpIp94Cg&usqp=CAU",
    price: "",
    comparePrice: "",
    category: "oil",
  });
  const router = useRouter();

  const addProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/product/new", {
        method: "POST",
        body: JSON.stringify({
          productName: product.productName,
          description: product.description,
          image: product.image,
          price: product.price,
          comparePrice: product.comparePrice,
          category: product.category,
        }),
      });

      if (response.ok) {
        // router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
    // setProduct({});
  };
  const { currentColor } = useStateContext();

  return (
    <div className="mx-2 mt-16 md:mt-1 md:mx-4">
      <h2 className="mb-3 mt-3 text-2xl">Add Products</h2>
      <form onSubmit={addProduct}>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4">
          {/* 1st col  */}
          <div>
            <div>
              <h2 className="font-bold text-xl my-2">Description</h2>
              <div className="border rounded p-2">
                <div className="flex flex-col">
                  <label className="my-2">Product Name</label>
                  <input
                    required
                    value={product.productName}
                    onChange={(e) =>
                      setProduct({ ...product, productName: e.target.value })
                    }
                    type="text"
                    className="border rounded p-1"
                    placeholder="ex. engine oil"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="my-2">Description</label>
                  <textarea
                    required
                    value={product.description}
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="border rounded p-1"
                    placeholder="ex. yamaha oil"
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xl my-2">Category</h2>
              <div className="border rounded p-2">
                <div className="flex flex-col">
                  <label className="my-2">Product category</label>
                  <select
                    name="category"
                    id="category"
                    className="border rounded p-1"
                  >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd col  */}
          <div>
            <div>
              <h2 className="font-bold text-xl my-2">Product Image</h2>
              <div className="border rounded p-2 grid grid-cols-2 gap-2">
                <input
                  type="file"
                  accept="iage/*"
                  style={{ borderColor: "blue" }}
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="bg-gray-light border border-dashed rounded p-4"
                />
                {!img ? (
                  <div
                    style={{ borderColor: "blue" }}
                    className="bg-gray-light border border-dashed rounded p-1  "
                  >
                    <div className=" overflow-hidden w-full h-36 flex justify-center items-center">
                      <img
                        className="object-scale-down"
                        src="https://cdn-icons-png.flaticon.com/512/4503/4503941.png"
                        alt="img"
                      />
                    </div>
                  </div>
                ) : (
                  <img src={img} alt="img" width={100} height={100} />
                )}
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xl my-2">Price</h2>
              <div className="border rounded p-2 grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <label className="my-2">Price</label>
                  <input
                    required
                    value={product.price}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                    type="number"
                    name=""
                    id=""
                    className="border rounded p-1"
                    placeholder="$ 200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="my-2">Compare at Price</label>
                  <input
                    required
                    value={product.comparePrice}
                    onChange={(e) =>
                      setProduct({ ...product, comparePrice: e.target.value })
                    }
                    className="border rounded p-1"
                    placeholder="$ 300"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            style={{ backgroundColor: currentColor }}
            className="p-4 rounded-xl "
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
