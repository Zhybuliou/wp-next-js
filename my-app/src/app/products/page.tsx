import ShowProducts from '@/components/products';
import React from 'react';

export default function Products() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <ShowProducts />
    </div>
  );
}
