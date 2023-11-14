import React from 'react' 
import styles from '@/app/ui/dashboard/user/user.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link';   
import Image from 'next/image';
import Paginatoin from '@/app/ui/dashboard/pagination/pagination';
export default function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search users..." />
        <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}> 
                <Image src='/noavatar.png' alt="" width={40} height={40} className={styles.userImage} />
                  John Doe
              </div>
            </td>
            <td>John@gmail.com</td>
            <td>11.11.2023</td>
            <td>admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>

              <Link href="/">
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
