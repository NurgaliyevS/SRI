import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Adaptogens in Your Daily Routine",
    excerpt:
      "Discover how adaptogens can help you manage stress and improve overall well-being.",
    date: "2023-06-01",
    image:
      "https://res.cloudinary.com/dp5ules9k/image/upload/v1733093772/Tmolecule/5-BANNER_1080x1080_x609ub.jpg",
    slug: "benefits-of-adaptogens",
  },
  {
    id: 2,
    title: "The Magic of Medicinal Mushrooms",
    excerpt:
      "Find out why these special mushrooms are nature's best health helpers",
    date: "2023-05-15",
    image:
      "https://res.cloudinary.com/dp5ules9k/image/upload/v1686261648/Tmolecule/organic-mushrooms_abcdef.jpg",
    slug: "mushroom-power",
  },
  {
    id: 3,
    title: "The Science Behind Collagen and Skin Health",
    excerpt:
      "Explore the role of collagen in maintaining youthful and healthy skin.",
    date: "2023-05-01",
    image:
      "https://res.cloudinary.com/dp5ules9k/image/upload/v1686261648/Tmolecule/collagen_mnopqr.jpg",
    slug: "collagen-and-skin-health",
  },
  {
    id: 4,
    title: "Lavender: Natures Stress-Reliever",
    excerpt:
      "Uncover the calming properties of lavender and how it can improve your sleep relaxation.",
    date: "2023-04-15",
    image:
      "https://res.cloudinary.com/dp5ules9k/image/upload/v1686261648/Tmolecule/organic-lavender_ghijkl.jpg",
    slug: "lavender-stress-relief",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-purple-800 mb-8">Our Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">Published on {post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
