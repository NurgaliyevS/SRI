import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function CollagenSkinHealthPage() {
  return (
    <article className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">
        The Science Behind Collagen and Skin Health
      </h1>
      <p className="text-sm text-gray-500 mb-6">Published on May 5, 2023</p>

      <Image
        src="/collagen.png"
        alt="Collagen and Skin Health"
        width={800}
        height={600}
        className="rounded-lg mb-6"
      />

      <div className="prose max-w-none">
        <p>
          From ancient beauty secrets to modern wellness trends, collagen has
          stood the test of time as nature's answer to aging gracefully. This
          remarkable protein doesn't just support our body's structure - it's
          the key to maintaining youthful skin, strong nails, and healthy hair.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Understanding Collagen's Power
        </h2>
        <p>
          As the most abundant protein in our bodies, collagen acts as the
          building blocks for skin elasticity, nail strength, and hair growth.
          While our natural collagen production decreases with age,
          supplementing can help maintain these vital structures.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Key Benefits for Your Beauty Routine
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Skin Rejuvenation:</strong> Helps diminish fine lines and
            wrinkles while improving skin's hydration and elasticity naturally.
          </li>
          <li>
            <strong>Nail Strength:</strong> Reinforces nail structure, reducing
            brittleness and promoting healthy growth for longer, stronger nails.
          </li>
          <li>
            <strong>Hair Health:</strong> Supports follicle strength and
            provides essential proteins for thicker, more resilient hair growth.
          </li>
          <li>
            <strong>Skin Texture:</strong> Enhances skin's natural repair
            process, leading to smoother, more radiant complexion.
          </li>
          <li>
            <strong>Overall Appearance:</strong> Creates a holistic improvement
            in your natural beauty from within.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          The Science of Beauty
        </h2>
        <p>
          Collagen's effectiveness comes from its unique composition of amino
          acids:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Glycine:</strong> Essential for skin repair and maintenance.
          </li>
          <li>
            <strong>Proline:</strong> Supports skin's natural healing and
            renewal.
          </li>
          <li>
            <strong>Hydroxyproline:</strong> Crucial for skin stability and
            structure.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Making Collagen Work for You
        </h2>
        <p>Incorporate collagen into your routine through various forms:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Hydrolyzed collagen powder for easy mixing into beverages</li>
          <li>Targeted collagen supplements for specific beauty goals</li>
          <li>Collagen-rich bone broth for a natural approach</li>
          <li>Collagen-infused skincare products for external support</li>
        </ul>

        <p>
          Our Premium Collagen Complex offers a scientifically formulated blend
          that targets all aspects of beauty enhancement, from skin elasticity
          to hair strength.
        </p>

        <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 my-6">
          <p className="font-bold">Beauty Tip:</p>
          <p>
            For optimal results, combine collagen supplementation with a healthy
            diet, proper hydration, and good skincare habits. Consistency is key
            - most people notice significant improvements within 4-8 weeks of
            regular use.
          </p>
        </div>

        <p>
          Ready to transform your beauty routine from the inside out? Our
          Premium Collagen Complex provides all the essential building blocks
          your body needs for radiant skin, stronger nails, and healthier hair.
        </p>
      </div>

      <div className="mt-8">
        <Button
          asChild
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          <Link href="/products">Discover Our Collagen Products</Link>
        </Button>
      </div>
    </article>
  );
}
