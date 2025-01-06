import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function LavenderStressRelief() {
  return (
    <article className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">
        Lavender: Natures Stress-Reliever
      </h1>
      <p className="text-sm text-gray-500 mb-6">Published on April 15, 2023</p>

      <Image
        src="/lavender.jpg"
        alt="Lavender for Stress Relief"
        width={800}
        height={600}
        className="rounded-lg mb-6"
      />

      <div className="prose max-w-none">
        <p>
          In our hectic modern world, finding natural ways to unwind becomes
          more valuable than ever. Lavender has been nature's answer to stress
          for centuries, offering a gentle yet effective way to find calm in
          chaos. Let's explore why this purple powerhouse deserves a spot in
          your stress-relief toolkit.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Why Lavender Works Wonders
        </h2>
        <p>
          Your nose knows best when it comes to lavender's calming effects. That
          sweet, floral scent isn't just pleasant - it actually sends signals to
          your brain's relaxation center, helping you shift from stress to
          serenity naturally and effectively.
        </p>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Real Benefits You Can Feel
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Better Sleep:</strong> Helps quiet your racing mind and
            promotes deeper, more restful sleep naturally.
          </li>
          <li>
            <strong>Stress Reduction:</strong> Calms your nervous system and
            helps lower those stress-induced heart palpitations.
          </li>
          <li>
            <strong>Mood Enhancement:</strong> Lifts your spirits and helps
            create a more positive mindset throughout your day.
          </li>
          <li>
            <strong>Physical Relaxation:</strong> Eases tension in your body and
            helps those tight shoulders finally drop.
          </li>
          <li>
            <strong>Mental Clarity:</strong> Helps clear the mental fog that
            stress often brings along.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          The Natural Advantage
        </h2>
        <p>
          What makes lavender so special? It's all about these natural
          compounds:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Linalool:</strong> The compound responsible for that famous
            calming effect.
          </li>
          <li>
            <strong>Linalyl Acetate:</strong> Works with your body's natural
            relaxation response.
          </li>
          <li>
            <strong>Terpenes:</strong> Help soothe both mind and body naturally.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">
          Easy Ways to Use Lavender
        </h2>
        <p>Make lavender part of your daily routine:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Add essential oil drops to your evening bath</li>
          <li>Keep a lavender sachet by your pillow</li>
          <li>Brew a calming cup of lavender tea</li>
          <li>Use a lavender-infused room spray</li>
        </ul>

        <p>
          Our Premium Lavender Collection brings you the finest quality lavender
          products, carefully crafted to help you find your calm place,
          naturally and effectively.
        </p>

        <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 my-6">
          <p className="font-bold">Stress-Relief Tip:</p>
          <p>
            For best results, make lavender part of your daily wind-down
            routine. Try using it at the same time each day - your body will
            start to associate the scent with relaxation, making it even more
            effective over time.
          </p>
        </div>

        <p>
          Ready to discover your natural path to peace? Our Premium Lavender
          Collection offers everything you need to create your own stress-free
          sanctuary at home or on the go.
        </p>
      </div>

      <div className="mt-8">
        <Button
          asChild
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          <Link href="/products">Explore Our Lavender Collection</Link>
        </Button>
      </div>
    </article>
  );
}
