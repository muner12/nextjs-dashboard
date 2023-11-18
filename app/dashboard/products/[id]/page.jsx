import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';
export default function SingleProductPage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt='' fill/>
            </div>
           Iphone
        </div>
        <div className={styles.formContainer}>
            <form action='' className={styles.form}>

          
            <label>Tilte</label>
            <input type='text'  name='title' placeholder='Bakht Munir'/>
            <label>Price</label>
            <input type='number'  name='price' placeholder='Bakhtmuner06@gmail.com'/>
             <label>Stock</label>
            <input type='number'  name='stock'/>
             <label>color</label>
            <input type='phone'  name='color' placeholder='red'/>
             <label>size</label>
          
            <textarea type='text'  name='username' placeholder='Pakistan'></textarea>
            <label>Cat</label>
            <select name='cat' id='cat'>
                    <option value="kitchen">kitchen</option>
                    <option value="computer">Computer</option>
            </select>
            <label>Description</label>
            <textarea name='desc' id='desc' cols={30} rows={12} placeholder='Description'></textarea>
            <button>Update</button>
            </form>
        </div>
    </div>
  )
}
