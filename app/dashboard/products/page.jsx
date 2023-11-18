import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Paginatoin from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/products/products.module.css'
export default function ProductsPage() {
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
          <tr>
            <td>
              <div className={styles.product}> 
                <Image src='/noproduct.jpg' alt="" width={40} height={40} className={styles.productImage} />
                iphone
              </div>
            </td>
            <td>desc</td>
            <td>11.11.2023</td>
            <td>399$</td>
          
            <td>720</td>
          
            <td>
              <div className={styles.buttons}>

              <Link href="/dashboard/products/1">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <Link href="/">
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginatoin/>
    </div>
  )
}
