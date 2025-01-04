import Image from "next/image";
import { Button } from "../components/ui/button";

const bottleImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093773/Tmolecule/BOTTLE_hb6jya.png";
const extraStrengthImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093772/Tmolecule/5-BANNER_1080x1080_x609ub.jpg";
const sleepFormulaImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093772/Tmolecule/2-BANNER_1080x1080_hwlwky.jpg";

const products = [
  {
    id: 1,
    name: "Adaptogen Blend - Original",
    description:
      "Our signature blend of 14 Organic Mushrooms, organic French Lavender, Collagen.",
    price: 39.99,
    image: bottleImage,
    stripeLink: "https://buy.stripe.com/00g8zS1YJ2gx9G0dQT",
    inStock: true,
  },
  {
    id: 2,
    name: "Adaptogen Blend - Extra Strength",
    description:
      "A more potent version of our signature blend for those needing extra support.",
    price: 49.99,
    image: extraStrengthImage,
    stripeLink: "",
    inStock: false,
  },
  {
    id: 3,
    name: "Adaptogen Blend - Sleep Formula",
    description:
      "Specially formulated to promote restful sleep and relaxation.",
    price: 44.99,
    image: sleepFormulaImage,
    stripeLink: "",
    inStock: false,
  },
];

export default function ProductList() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-purple-800 mb-8">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-purple-800">
                ${product.price.toFixed(2)}
              </span>
              {product.inStock ? (
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  <a
                    href={product.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Buy now
                  </a>
                </Button>
              ) : (
                <div className="flex flex-col items-end">
                  <span className="text-red-600 font-semibold mb-1">
                    Out of Stock
                  </span>
                  <Button
                    disabled
                    className="opacity-50 cursor-not-allowed bg-gradient-to-r from-gray-400 to-gray-500 px-6 py-4 text-lg"
                  >
                    Buy now
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}