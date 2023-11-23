import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Paginatoin from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/products/products.module.css'

import { fetchProducts } from '@/app/lib/data';
export default async function ProductsPage({searchParams}) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>title</td>
            <td>Discripton</td>
            <td>price</td>
            <td>Created at</td>
            <td>stock</td>

            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => {
              return <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <Image src={product.img ||'/noproduct.jpg'} alt="" width={40} height={40} className={styles.productImage} />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>${product.price}</td>
                <td>{product.createdAt}</td>

                <td>{product.stock}</td>

                <td>
                  <div className={styles.buttons}>

                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <Link href="/">
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </Link>
                  </div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      <Paginatoin count={count}/>
    </div>
  )
}
