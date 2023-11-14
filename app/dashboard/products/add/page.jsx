import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css';
export default function AddProductPage() {
  return (
    <div className={styles.container}>

      <form className={styles.form} action=''>
        <input type='text' placeholder='title' name='title' required/>
        <select name='cat' id='cat'>
          <option value={"genral"}>Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">computer</option>
        </select>
        <input type='number' placeholder='price' name='price' />
        <input type='stock' placeholder='stock' name='stock' />
        <input type='text' placeholder='color' name='color' />
        <input type='text' placeholder='size' name='size' />
        <textarea name='desc' id='desc' rows="16" placeholder='Description'></textarea>
        <button type='submit'>Submit</button>



      </form>
    </div>
  )
}
