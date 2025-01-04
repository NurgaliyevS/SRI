import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-800">
            Adaptogen Blend
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-purple-600"
            >
              Products
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
