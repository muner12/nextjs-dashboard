import React from 'react'
import styles from '@/app/ui/dashboard/user/singleUser/singleUser.module.css';
import Image from 'next/image';
export default function SingleUserPage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt='' fill/>
            </div>
            Bakht Munir
        </div>
        <div className={styles.formContainer}>
            <form action='' className={styles.form}>

          
            <label>Username</label>
            <input type='text'  name='username' placeholder='Bakht Munir'/>
            <label>Email</label>
            <input type='email'  name='email' placeholder='Bakhtmuner06@gmail.com'/>
             <label>Password</label>
            <input type='Password'  name='password'/>
             <label>Phone</label>
            <input type='phone'  name='phone' placeholder='1232321'/>
             <label>Address</label>
            <input type='text'  name='address' placeholder='Bakht Munir'/>
             <label>Username</label>
            <textarea type='text'  name='username' placeholder='Pakistan'></textarea>
            <label>Is Admin?</label>
            <select name='isAdmin' id='isAdmin'>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
            </select>
            <label>Is Active?</label>
            <select name='isActive' id='isActive'>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
            </select>
            <button>Update</button>
            </form>
        </div>
    </div>
  )
}
