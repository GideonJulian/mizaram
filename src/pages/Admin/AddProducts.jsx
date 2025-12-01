import React, { useState } from "react";
import { supabase } from "../../../superbase/client";
const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Skincare");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // 3 Images
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [sideFile, setSideFile] = useState(null);

  const [frontPreview, setFrontPreview] = useState(null);
  const [backPreview, setBackPreview] = useState(null);
  const [sidePreview, setSidePreview] = useState(null);

  // IMAGE HANDLER
  const handleImageChange = (e, setFile, setPreview) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  // UPLOAD SINGLE IMAGE
  const uploadSingleImage = async (file) => {
    if (!file) return null;
    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("products")
      .upload(fileName, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: url } = supabase.storage
      .from("products")
      .getPublicUrl(fileName);

    return url.publicUrl;
  };

  // SAVE PRODUCT
  const handleSave = async () => {
    setLoading(true);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) throw new Error("You must be logged in.");

      if (!name || !price || !description) {
        alert("Fill all text fields.");
        setLoading(false);
        return;
      }

      if (!frontFile || !backFile || !sideFile) {
        alert("Upload all 3 images.");
        setLoading(false);
        return;
      }

      // Upload images
      const frontUrl = await uploadSingleImage(frontFile);
      const backUrl = await uploadSingleImage(backFile);
      const sideUrl = await uploadSingleImage(sideFile);

      // INSERT PRODUCT
      const { error } = await supabase.from("products").insert([
        {
          name,
          price,
          category,
          description,
          front_image: frontUrl,
          back_image: backUrl,
          side_image: sideUrl,
          created_at: new Date().toISOString() 
        },
      ]);

      if (error) throw error;

      alert("Product uploaded successfully!");

      // Reset
      setName("");
      setPrice("");
      setCategory("Skincare");
      setDescription("");
      setFrontFile(null);
      setBackFile(null);
      setSideFile(null);
      setFrontPreview(null);
      setBackPreview(null);
      setSidePreview(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save product: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-[#2d3748] text-3xl font-bold">Add New Product</h1>
        <p className="text-[#718096] mt-1">Fill in the details below.</p>
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
                  className="form-input w-full rounded-lg bg-[#f9f9f9] border-[#e2e8f0] h-12 px-4"
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
                    className="form-input w-full rounded-lg bg-[#f9f9f9] border-[#e2e8f0] h-12 pl-12"
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
                  className="form-select w-full h-12 rounded-lg bg-[#f9f9f9] border-[#e2e8f0] px-4"
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
                  className="form-textarea w-full rounded-lg bg-[#f9f9f9] border-[#e2e8f0] p-4 h-28"
                  placeholder="Describe the product..."
                ></textarea>
              </label>
            </div>
          </div>
        </div>

        {/* MEDIA UPLOAD (3 IMAGES) */}
        <div className="bg-white rounded-xl shadow-soft border border-[#e2e8f0]">
          <h2 className="text-[#2d3748] text-lg font-bold px-6 pt-5 pb-4 border-b">
            Product Images
          </h2>

          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FRONT */}
            <div>
              <p className="text-sm font-medium pb-2">Front Image</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="front"
                onChange={(e) =>
                  handleImageChange(e, setFrontFile, setFrontPreview)
                }
              />

              <label
                htmlFor="front"
                className="w-full h-40 border border-dashed rounded-lg flex items-center justify-center cursor-pointer bg-[#f9f9f9] overflow-hidden"
              >
                {frontPreview ? (
                  <img
                    src={frontPreview}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[#718096]">
                    Click to upload front view
                  </span>
                )}
              </label>
            </div>

            {/* BACK */}
            <div>
              <p className="text-sm font-medium pb-2">Back Image</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="back"
                onChange={(e) =>
                  handleImageChange(e, setBackFile, setBackPreview)
                }
              />

              <label
                htmlFor="back"
                className="w-full h-40 border border-dashed rounded-lg flex items-center justify-center cursor-pointer bg-[#f9f9f9] overflow-hidden"
              >
                {backPreview ? (
                  <img
                    src={backPreview}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[#718096]">
                    Click to upload back view
                  </span>
                )}
              </label>
            </div>

            {/* SIDE */}
            <div>
              <p className="text-sm font-medium pb-2">Side Image</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="side"
                onChange={(e) =>
                  handleImageChange(e, setSideFile, setSidePreview)
                }
              />

              <label
                htmlFor="side"
                className="w-full h-40 border border-dashed rounded-lg flex items-center justify-center cursor-pointer bg-[#f9f9f9] overflow-hidden"
              >
                {sidePreview ? (
                  <img
                    src={sidePreview}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[#718096]">
                    Click to upload side view
                  </span>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* SAVE BTN */}
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
