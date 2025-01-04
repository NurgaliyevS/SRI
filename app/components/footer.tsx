import Link from "next/link";
import { Facebook, Instagram, TwitterIcon as TikTok } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white bg-opacity-80 backdrop-blur-md mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-purple-800 text-lg font-semibold mb-2">
              Adaptogen Blend
            </h3>
            <p className="text-gray-600">Enhancing your wellness naturally</p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-gray-900 font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-600">
              <li>
                <Link href="/" className="hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-purple-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-gray-900 font-semibold mb-2">Contact</h4>
            <p className="text-gray-600">Email: support@tmolecule.com</p>
            <p className="text-gray-600">Phone: (866)708-4991</p>
          </div>
          <div className="w-full md:w-1/5">
            <h4 className="text-gray-900 font-semibold mb-2">Newsletter</h4>
            <p className="text-gray-600 mb-2">
              Stay updated with our latest news and offers.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-gray-700 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:border-neutral-800"
            />
          </div>
          <div className="w-full md:w-1/5 mt-6 md:mt-0">
            <h4 className="text-gray-900 font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/GetTMolecule"
                target="https://facebook.com/GetTMolecule"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/tmolecule.official"
                target="https://www.instagram.com/tmolecule.official"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://tiktok.com/@tmolecule"
                target="https://www.tiktok.com/@tmolecule"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <TikTok size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Tmolecule. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
