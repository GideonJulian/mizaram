import React, { useState, useRef } from "react";
import { superbase } from "../../../superbase/client";


const AddProducts = () => {
 const fileInputRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Skincare");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  /* =========== SAVE PRODUCT =========== */
  const handleSave = async () => {
    if (!name || !price || !description || !file) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    setLoading(true);

    try {
      // Upload image to superbase storage
      const fileName = `${Date.now()}-${file.name}`;

      const { data: uploadData, error: uploadError } =
        await superbase.storage.from("products").upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: publicUrl } = superbase.storage
        .from("products")
        .getPublicUrl(fileName);

      const imageUrl = publicUrl.publicUrl;

      // Insert product into database
      const { data: productData, error: productError } = await superbase
        .from("products")
        .insert([
          {
            name,
            price,
            category,
            description,
            image_url: imageUrl,
          },
        ]);

      if (productError) throw productError;

      alert("Product saved successfully!");
      setName("");
      setPrice("");
      setCategory("Skincare");
      setDescription("");
      setPreview(null);
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while saving the product.");
    }

    setLoading(false);
  };
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-[#2d3748] text-3xl font-bold">Add New Product</h1>
        <p className="text-[#718096] mt-1">
          Fill in the details below to add a new product.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* PRODUCT DETAILS */}
        <div className="bg-white rounded-xl shadow-soft border border-[#e2e8f0]">
          <h1 className="text-[#2d3748] text-lg font-bold px-6 pt-5 pb-4 border-b">
            Product Details
          </h1>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="flex flex-col">
                <p className="text-sm font-medium pb-2 text-[#2d3748]">
                  Product Name
                </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Natural Glow Face Serum"
                  className="form-input w-full rounded-lg bg-[#f9f9f9] border-[#e2e8f0] h-12 px-4 focus:ring-2 focus:ring-[#38664180]"
                />
              </label>
            </div>

            <div>
              <label>
                <p className="text-sm font-medium pb-2 text-[#2d3748]">Price</p>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-[#718096]">
                    $
                  </span>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="29.99"
                    className="form-input w-full rounded-lg bg-[#f9f9f9] border-[#e2e8f0] h-12 pl-12 focus:ring-[#38664180]"
                  />
                </div>
              </label>
            </div>

            <div>
              <label>
                <p className="text-sm font-medium pb-2 text-[#2d3748]">
                  Category
                </p>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-select w-full h-12 rounded-lg bg-[#f9f9f9] border-[#e2e8f0] px-4 focus:ring-[#38664180]"
                >
                  <option>Skincare</option>
                  <option>Haircare</option>
                  <option>Perfume</option>
                  <option>Body Lotion</option>
                </select>
              </label>
            </div>

            <div className="md:col-span-2">
              <label>
                <p className="text-sm font-medium pb-2 text-[#2d3748]">
                  Description
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-textarea w-full rounded-lg bg-[#f9f9f9] border-[#e2e8f0] p-4 h-28 focus:ring-[#38664180]"
                  placeholder="Describe the product..."
                ></textarea>
              </label>
            </div>
          </div>
        </div>

        {/* MEDIA UPLOAD */}
        <div className="bg-white rounded-xl shadow-soft border border-[#e2e8f0]">
          <h2 className="text-[#2d3748] text-lg font-bold px-6 pt-5 pb-4 border-b">
            Media
          </h2>

          <div className="p-6">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />

            <div
              onClick={handleFileClick}
              className="relative flex items-center justify-center w-full h-64 border-2 border-[#e2e8f0] border-dashed rounded-lg cursor-pointer bg-[#f9f9f9] overflow-hidden"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-4xl text-[#718096] mb-4">
                    cloud_upload
                  </span>
                  <p className="text-sm text-[#718096]">
                    Click to upload{" "}
                    <span className="font-semibold">or drag and drop</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full h-12 rounded-lg bg-[#386641] text-white font-semibold text-base shadow hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProducts;
