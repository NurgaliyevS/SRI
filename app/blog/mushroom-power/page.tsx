import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MushroomPowerPage() {
  return (
    <article className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Harnessing the Power of Medicinal Mushrooms</h1>
      <p className="text-sm text-gray-500 mb-6">Published on May 15, 2023</p>
      
      <Image 
        src="https://res.cloudinary.com/dp5ules9k/image/upload/v1686261648/Tmolecule/organic-mushrooms_abcdef.jpg" 
        alt="Various medicinal mushrooms" 
        width={800} 
        height={600} 
        className="rounded-lg mb-6"
      />
      
      <div className="prose max-w-none">
        <p>For thousands of years, mushrooms have been revered not just for their culinary value, but for their incredible health benefits. Today, were rediscovering the power of these fascinating fungi and their potential to revolutionize our approach to health and wellness.</p>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">The Magic of Medicinal Mushrooms</h2>
        <p>Medicinal mushrooms are packed with bioactive compounds that can support various aspects of our health. From boosting immune function to enhancing cognitive performance, these fungi are true superfoods.</p>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">Top Medicinal Mushrooms and Their Benefits</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Reishi:</strong> Known as the "mushroom of immortality," it supports immune function and may help reduce stress and fatigue.</li>
          <li><strong>Lions Mane:</strong> Renowned for its potential to boost cognitive function and support nerve health.</li>
          <li><strong>Chaga:</strong> High in antioxidants, it may help lower inflammation and support immune health.</li>
          <li><strong>Cordyceps:</strong> Popular among athletes for its potential to enhance stamina and athletic performance.</li>
          <li><strong>Turkey Tail:</strong> Known for its immune-boosting properties and potential cancer-fighting abilities.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">The Science Behind Mushroom Power</h2>
        <p>Medicinal mushrooms contain a variety of beneficial compounds, including:</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Beta-glucans:</strong> These complex sugars are known for their immune-modulating effects.</li>
          <li><strong>Triterpenes:</strong> Found in reishi mushrooms, these compounds may have anti-inflammatory and anti-cancer properties.</li>
          <li><strong>Ergothioneine:</strong> A powerful antioxidant that may help protect against cellular damage.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">Incorporating Medicinal Mushrooms into Your Routine</h2>
        <p>There are many ways to enjoy the benefits of medicinal mushrooms:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Powders: Easy to add to smoothies, coffee, or tea</li>
          <li>Capsules: Convenient for daily supplementation</li>
          <li>Tinctures: Liquid extracts for quick absorption</li>
          <li>Whole mushrooms: Can be cooked and enjoyed in various dishes</li>
        </ul>
        
        <p>Our Adaptogen Blend incorporates a powerful mix of medicinal mushrooms, providing a convenient way to harness their benefits in your daily routine.</p>
        
        <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 my-6">
          <p className="font-bold">Important Note:</p>
          <p>While medicinal mushrooms are generally safe, always consult with a healthcare professional before starting any new supplement regimen, especially if you have existing health conditions or are taking medications.</p>
        </div>
        
        <p>Ready to experience the power of medicinal mushrooms? Our Adaptogen Blend combines the best of these fantastic fungi with other powerful adaptogens for a comprehensive approach to your health and wellness.</p>
      </div>
      
      <div className="mt-8">
        <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
          <Link href="/products">Discover Our Adaptogen Blend</Link>
        </Button>
      </div>
    </article>
  )
}

