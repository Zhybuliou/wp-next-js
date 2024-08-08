import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <nav>
      <Link href="/" className="ml-2 font-semibold text-teal-800">
        Home
      </Link>
      <Link href="/products" className="ml-2 font-semibold text-teal-800">
        Products
      </Link>
      <Link href="/blog" className="ml-2 font-semibold text-teal-800">
        Blog
      </Link>
      <Link href="/about" className="ml-2 font-semibold text-teal-800">
        About
      </Link>
      <Link href="/contact" className="ml-2 font-semibold text-teal-800">
        Contact
      </Link>
    </nav>
  );
}
