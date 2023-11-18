import React from 'react';
import styles from '@/app/ui/dashboard/user/user.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';   
import Image from 'next/image';
import Paginatoin from '@/app/ui/dashboard/pagination/pagination';
import { fetchUsers } from '@/app/lib/data';
export default async function UsersPage({searchParams}) {
  const q=searchParams?.q || "";
  const page= searchParams?.page || 1;

  const users=await fetchUsers(q,page);
  

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
        {
          users.map((user)=>{
         return  <tr key={user._id}>
            <td>
              <div className={styles.user}> 
                <Image src={ user.img ||'/noavatar.png'} alt="" width={40} height={40} className={styles.userImage} />
                {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.created_at}</td>
            <td>{user.isAdmin?"Admin":"User"}</td>
            <td>{user.isActive?"Active":"passive"}</td>
            <td>
              <div className={styles.buttons}>

              <Link href="/dashboard/users/test">
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
      <Paginatoin/>
    </div>
  )
}
