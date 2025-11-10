import React from "react";

import valueImage1 from "../assets/products/20250729_1916_Wooden Hair Pick_remix_01k1bjw9jjedfsy3r23y4hcf5f.png";
import valueImage2 from "../assets/products/20250729_2032_Leaf Packaging Design_remix_01k1bq6w5rfeysew12r6awpaj6.png";
import valueImage3 from "../assets/products/20250729_2046_Hair Mask Product_remix_01k1br1njbecraatpvnn071dkm.png";
import valueImage4 from "../assets/products/20250801_1439_Wooden Scalp Massager_remix_01k1jt7j16e6d9cdw92whkkra0.png";

const brandValues = [
  {
    id: 1,
    image: valueImage1,
    alt: "Handcrafted wooden hair pick",
  },
  {
    id: 2,
    image: valueImage2,
    alt: "Eco-friendly leaf packaging design",
  },
  {
    id: 3,
    image: valueImage3,
    alt: "Nourishing hair mask product",
  },
  {
    id: 4,
    image: valueImage4,
    alt: "Wooden scalp massager",
  },
];

const BrandValues = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <h2 className="mb-8 text-3xl font-bold text-center">Brand Value</h2>
        <div className="flex w-full flex-col items-center gap-6 md:flex-row">
          {brandValues.map((value) => (
            <div
              key={value.id}
              className="flex w-full max-w-xs flex-1 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={value.image}
                alt={value.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
