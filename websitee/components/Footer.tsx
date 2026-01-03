import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 bg-transparent">
              <Image
                src="/company_logo.png"
                alt="Company Logo"
                width={50}
                height={50}
                className="h-12 w-auto object-contain bg-transparent"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <p className="text-gray-300 mb-4">
              AI Solutions for Your Business
            </p>
            <p className="text-sm text-gray-400">
              Transforming businesses with cutting-edge AI technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-gray-300 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-gray-300 hover:text-white transition-colors">
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Fashion Marketing Platform
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 StratgenAI. All rights reserved. Built with ❤️ by three co-founders.
          </p>
        </div>
      </div>
    </footer>
  )
}

