'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/ninhdev.module.css'
import AppTable from '@/components/app.table'
import {useEffect} from 'react'
import useSWR from "swr"
export default function Home() {

  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href="/facebook">
            <span className={y['red']}>Facebook</span>
          </Link>
        </li>
        <li><Link href="/tiktok">Tiktok</Link></li>
        <li><Link href="/youtobe">Youtobe</Link></li> 
      </ul>
    </div>
  )
}
