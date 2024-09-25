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
  
  const fetcher = (url: string) => fetch(url)
  .then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    'http://localhost:8000/blogs',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )
  console.log(data)
  // useEffect(()=> {
  //   const fetchData = async() => {
  //     const data = await fetch('http://localhost:8000/blogs')
  //     const getData = await data.json()
  //     console.log(getData)
  //   }
  //   fetchData()
  // },[])
  return (
    <div>
      <div>{data?.length}</div>
      <ul>
        <li className={x['red']}>
          <Link href="/facebook">
            <span className={y['red']}>Facebook</span>
          </Link>
        </li>
        <li><Link href="/tiktok">Tiktok</Link></li>
        <li><Link href="/youtobe">Youtobe</Link></li> 
      </ul>
      <AppTable/>
    </div>
  )
}
