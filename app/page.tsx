import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";

const bottleImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093773/Tmolecule/BOTTLE_hb6jya.png";
const lifestyleImage1 =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093772/Tmolecule/5-BANNER_1080x1080_x609ub.jpg";
const lifestyleImage2 =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093772/Tmolecule/2-BANNER_1080x1080_hwlwky.jpg";
const ingredientImage1 =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093772/Tmolecule/3-BANNER_1080x1080_ckcf1z.jpg";
const ingredientImage2 =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093773/Tmolecule/2-BANNER_2000x619_wvyrmg.jpg";
const supplementFactsImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1686261648/Tmolecule/Supplement-Facts-for-14-mushroom-blend_1_qqt1em.png";
const mushroomImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1686261648/Tmolecule/organic-mushrooms_abcdef.jpg";
const lavenderImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1686261648/Tmolecule/organic-lavender_ghijkl.jpg";
const collagenImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1686261648/Tmolecule/collagen_mnopqr.jpg";
const teaImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733094241/Tmolecule/1-BANNER_2000x500_bf0c7d47-9398-485e-9fbf-2e15e7299562_yqz32q.jpg";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column for images */}
        <div className="md:w-1/2 space-y-4">
          <Image
            src={bottleImage}
            alt="Adaptogen Blend Bottle"
            width={500}
            height={500}
            className="w-full rounded-lg shadow-md"
            priority
          />
          <div className="grid grid-cols-3 gap-2">
            <Image
              src={lifestyleImage1}
              alt="Adaptogen Blend antioxidants benefits"
              width={150}
              height={150}
              className="rounded-lg shadow-sm"
            />
            <Image
              src={lifestyleImage2}
              alt="Adaptogen Blend ashwagandha spices"
              width={150}
              height={150}
              className="rounded-lg shadow-sm"
            />
            <Image
              src={ingredientImage1}
              alt="Adaptogen Blend collagen hair skin nail"
              width={150}
              height={150}
              className="rounded-lg shadow-sm"
            />
            <Image
              src={ingredientImage2}
              alt="Adaptogen Blend organic french lavender"
              width={150}
              height={150}
              className="rounded-lg shadow-sm"
            />
            <Image
              src={supplementFactsImage}
              alt="Adaptogen Blend organic mushroom chaga"
              width={150}
              height={150}
              className="rounded-lg shadow-sm"
            />
            <Image
              src={teaImage}
              alt="Adaptogen Blend Tea"
              width={150}
              height={150}
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Right column for product information */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Elevate Your Wellness
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the power of nature with our premium adaptogen blend.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <Link href="/products">Shop Now</Link>
          </Button>

          <h2 className="text-2xl font-semibold text-purple-800 mb-4 mt-8">
            Key Ingredients
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Organic Mushrooms - 14 Mushroom Blend
              </h3>
              <p className="text-gray-600">
                Boost your immune system and cognitive function with our
                carefully selected organic mushrooms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Organic French Lavender
              </h3>
              <p className="text-gray-600">
                Promote relaxation and reduce stress with the soothing
                properties of organic lavender.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Collagen Peptides
              </h3>
              <p className="text-gray-600">
                Support skin health, joint function, and overall vitality with
                our premium collagen.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Health Benefits
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
            <li>Supports stress adaptation and resilience</li>
            <li>Enhances cognitive function and mental clarity</li>
            <li>Boosts immune system function</li>
            <li>Promotes relaxation and improves sleep quality</li>
            <li>Supports skin health and collagen production</li>
            <li>Aids in joint health and flexibility</li>
          </ul>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Lifestyle Integration
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={lifestyleImage1}
              alt="Adaptogen Blend in daily routine"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="mt-4 text-gray-600">
              Incorporate our Adaptogen Blend into your daily wellness routine
              for optimal results.
            </p>
          </div>
          <div>
            <Image
              src={lifestyleImage2}
              alt="Active lifestyle with Adaptogen Blend"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="mt-4 text-gray-600">
              Support your active lifestyle with the power of adaptogens.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Latest from Our Blog
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/blog/benefits-of-adaptogens"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              The Benefits of Adaptogens in Your Daily Routine
            </h3>
            <p className="text-gray-600">
              Discover how adaptogens can help you manage stress and improve
              overall well-being.
            </p>
          </Link>
          <Link
            href="/blog/mushroom-power"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Harnessing the Power of Medicinal Mushrooms
            </h3>
            <p className="text-gray-600">
              Learn about the incredible health benefits of various medicinal
              mushrooms.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
