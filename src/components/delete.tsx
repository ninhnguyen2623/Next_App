'use client'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { mutate } from "swr"
interface IProps {
  Deblog: IBlog | null
  setDeBlog: (value: IBlog | null) => void
}

const DeleteBlog = (props: IProps) => {

  const { Deblog, setDeBlog } = props
  const [id, setId] = useState<number>(0)
  let checkDelete = false
  useEffect(() => {
    if (Deblog && Deblog.id) {
      setId(Deblog.id)
    }
  }, [Deblog])
  fetch(`http://localhost:8000/blogs/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.text()) // or res.json()
    .then(res => {
      if (res) {
        mutate('http://localhost:8000/blogs')
        checkDelete = true
      }
    })
  return (
    <>

    </>
  )
}
export default DeleteBlog