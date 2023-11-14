"use client"
import React from 'react'
import styles from './menuLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function MenuLinks({items}) {
   const pathName=usePathname();
   console.log(pathName)
  return (
    <Link href={items.path} className={`${styles.container} ${pathName===items.path && styles.active}`}>
        {items.icon}
        {items.title}
        </Link>
  )
}
