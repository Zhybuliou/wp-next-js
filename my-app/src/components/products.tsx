import React, { Suspense } from 'react';
import Image from 'next/image';

const reqUrl =
  'http://admin-taxes.x10.mx/wp/wp-json/wp/v2/products?&acf_format=standard&_fields=id,title,acf';

const ShowProducts = async () => {
  const req = await fetch(reqUrl, { cache: 'no-store' });
  const p = await req.json();

  console.log(p);

  return (
    <>
      <Suspense fallback="...Loading">
        <div className="flex w-[1200px] flex-wrap justify-between">
          {p.map((product: any) => (
            <div key={product.id}>
              <h2>{product.title.rendered}</h2>
              <p>{product.acf.summary}</p>
              <p>{product.acf.category.name}</p>
              <Image
                src={product.acf.large_image}
                width={300}
                height={100}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                alt="Picture of the author"
              />
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
};
export default ShowProducts;
