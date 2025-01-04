import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function BenefitsOfAdaptogensPage() {
  return (
    <article className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">
        The Benefits of Adaptogens in Your Daily Routine
      </h1>
      <p className="text-sm text-gray-500 mb-6">Published on June 1, 2023</p>

      <Image
        src="https://res.cloudinary.com/dp5ules9k/image/upload/v1733093772/Tmolecule/5-BANNER_1080x1080_x609ub.jpg"
        alt="Various adaptogens and herbs"
        width={800}
        height={600}
        className="rounded-lg mb-6"
      />

      <div className="prose max-w-none">
        <p>
          In todays fast-paced world, stress has become an unwelcome companion
          in our daily lives. But what if there was a natural way to help your
          body adapt to stress and improve overall well-being? Enter adaptogens
          – natures stress-busting superheroes.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          What Are Adaptogens?
        </h2>
        <p>
          Adaptogens are a unique class of herbs and mushrooms that help your
          body resist stressors of all kinds, whether physical, chemical, or
          biological. These powerful plants have been used for centuries in
          traditional Chinese and Ayurvedic healing practices.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Key Benefits of Adaptogens
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Stress Reduction: Adaptogens help normalize body functions and
            strengthen the bodys response to stress.
          </li>
          <li>
            Enhanced Mental Clarity: Many adaptogens are known to improve focus,
            memory, and overall cognitive function.
          </li>
          <li>
            Increased Energy: Adaptogens can help combat fatigue and increase
            stamina without the jitters associated with caffeine.
          </li>
          <li>
            Immune System Support: Some adaptogens have powerful immune-boosting
            properties.
          </li>
          <li>
            Mood Stabilization: Regular use of adaptogens may help balance mood
            and reduce symptoms of anxiety and depression.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Popular Adaptogens and Their Benefits
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Ashwagandha:</strong> Reduces stress and anxiety, improves
            brain function
          </li>
          <li>
            <strong>Rhodiola:</strong> Fights fatigue, improves mental
            performance
          </li>
          <li>
            <strong>Ginseng:</strong> Boosts energy, lowers blood sugar, reduces
            inflammation
          </li>
          <li>
            <strong>Holy Basil:</strong> Reduces stress, supports immune
            function
          </li>
          <li>
            <strong>Cordyceps:</strong> Increases energy, improves athletic
            performance
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Incorporating Adaptogens into Your Routine
        </h2>
        <p>
          Adding adaptogens to your daily routine is easy. You can find them in
          various forms, including powders, tinctures, and capsules. Our
          Adaptogen Blend combines some of the most potent adaptogens with
          organic mushrooms and lavender for a comprehensive approach to stress
          management and overall wellness.
        </p>

        <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 my-6">
          <p className="font-bold">Remember:</p>
          <p>
            While adaptogens are generally safe for most people, its always best
            to consult with a healthcare professional before adding any new
            supplement to your routine, especially if you have existing health
            conditions or are taking medications.
          </p>
        </div>

        <p>
          Ready to experience the benefits of adaptogens for yourself? Check out
          our Adaptogen Blend and take the first step towards a more balanced,
          resilient you.
        </p>
      </div>

      <div className="mt-8">
        <Button
          asChild
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          <Link href="/products">Shop Adaptogen Blend</Link>
        </Button>
      </div>
    </article>
  );
}
