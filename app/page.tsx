"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
const teaImage =
  "https://res.cloudinary.com/dp5ules9k/image/upload/v1733094241/Tmolecule/1-BANNER_2000x500_bf0c7d47-9398-485e-9fbf-2e15e7299562_yqz32q.jpg";

interface ImageGalleryProps {
  mainImage: string;
  thumbnails: string[];
  onImageClick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

function ImageGallery({
  mainImage,
  thumbnails,
  onImageClick,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square">
        <Image
          src={selectedImage}
          alt="Main product image"
          className="w-full rounded-lg shadow-md cursor-pointer"
          width={500}
          height={500}
          onClick={onImageClick}
          priority
        />
      </div>

      <div className="grid grid-cols-6 gap-2">
        {[mainImage, ...thumbnails].map((image, index) => (
          <div
            key={index}
            className={`relative border-2 rounded-lg overflow-hidden cursor-pointer
              ${
                selectedImage === image
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            onMouseEnter={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/products");
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <ImageGallery
            mainImage={bottleImage}
            thumbnails={[
              lifestyleImage1,
              lifestyleImage2,
              ingredientImage1,
              ingredientImage2,
              supplementFactsImage,
              teaImage,
            ]}
            onImageClick={handleClick}
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Improve Your Wellness
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Feel better with premium adaptogen ingredients.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <Link href="/products">Shop Now</Link>
          </Button>

          <h2 className="text-2xl font-semibold text-purple-800 mb-4 mt-8">
            Premium Natural Ingredients
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Organic Mushrooms
              </h3>
              <p className="text-gray-600">
                Mushrooms that help you stay healthy and think better. Like
                having a shield for your body!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Organic Lavender
              </h3>
              <p className="text-gray-600">
                Sweet-smelling flowers that help you relax and sleep better,
                just like a warm hug.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Collagen
              </h3>
              <p className="text-gray-600">
                Natural protein that makes your skin glow, hair shine, and helps
                your joints move better.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Health Benefits
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
            <li>Natural stress relief and improved resilience</li>
            <li>Improved attention and mental clarity</li>
            <li>Immune system booster</li>
            <li>Better sleep and deeper relaxation</li>
            <li>Shinning skin and collagen production</li>
            <li>Improved joint health and comfort</li>
          </ul>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Customer Reviews
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-2">★★★★★</span>
            <span className="font-semibold">5.0 out of 5 stars</span>
          </div>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">
            Pleasant surprises
          </h3>
          <p className="text-gray-600 mb-2">
            I wanted to try a mushroom tea. a freind recommend this one to me.
            Upon opening it the lavender smell was terrific a Beautiful blend of
            mushrooms seems to be on the money. After a few days I notice my
            joints and achy pains seem to get less intense didn't go away but
            felt much better. I drink it with honey I recommend it. good tea.
            Bought for a coffee alternative that turned out to have joint
            inflammation benefits. Pleasant surprise
          </p>
          <p className="text-sm text-gray-500">
            Reviewed in the United States on May 11, 2024 by Mario D.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Lifestyle For You
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={lifestyleImage1}
              alt="Adaptogen Blend in daily routine"
              width={500}
              height={300}
              className="rounded-lg shadow-md cursor-pointer"
              onClick={handleClick}
            />
            <p className="mt-4 text-gray-600">
              Take <strong>Adaptogen Blend</strong> daily with breakfast - feel
              amazing all day long
            </p>
          </div>
          <div>
            <Image
              src={lifestyleImage2}
              alt="Active lifestyle with Adaptogen Blend"
              width={500}
              height={300}
              className="rounded-lg shadow-md cursor-pointer"
              onClick={handleClick}
            />
            <p className="mt-4 text-gray-600">
              Support your active lifestyle with the power of adaptogens.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Discover More Wellness Insights
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
              overall well-being
            </p>
          </Link>
          <Link
            href="/blog/mushroom-power"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              The Magic of Medicinal Mushrooms
            </h3>
            <p className="text-gray-600">
              Find out why these special mushrooms are nature's best health
              helpers
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
