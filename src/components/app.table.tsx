'use client'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import styleTable from '@/styles/app.table.module.css' 
import CreateModal from '@/components/create.modal'
import DeleteBlog from '@/components/delete'
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';
interface IProps {
  blogs: IBlog[]
}

const AppTable = (props: IProps) => {
  const {blogs} = props;

  const [blog, setBlog] = useState<IBlog | null>(null)
  const [blogDe, setDeBlog] = useState<IBlog | null>(null)
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false)
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)
  return (
    <>
      <div>
        <div className={styleTable['header-data-row']}>
          <div><h3>Table Blogs</h3></div>
          <Button variant='success' onClick={() => setShowModalCreate(true)} >Add New</Button>
        </div>
      </div>
      <Table striped bordered hover>
      
      <thead>
        <tr>
          <th>No</th> 
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs?.map( item =>{
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <Link href={`/blogs/${item.id}`} className='btn btn-primary'>View</Link>
                <Button variant='warning'className='mx-3'
                 onClick={() => {
                  setBlog(item)
                  setShowModalUpdate(true)
                 }} 
                >
                  Edit
                </Button>
                <Button variant='danger' 
                  onClick={() => {
                    setDeBlog(item)
                   }} 
                >Delete</Button>
              </td>
          </tr>
          )
        })}
        
      </tbody>
    </Table>
    <CreateModal
      showModalCreate = {showModalCreate}
      setShowModalCreate = {setShowModalCreate}
    />
    <UpdateModal
      showModalUpdate = {showModalUpdate}
      setShowModalUpdate = {setShowModalUpdate}
      blog={blog}
      setBlog={setBlog}
    />
    <DeleteBlog
     Deblog={blogDe}
     setDeBlog={setDeBlog}
    />
    
    </>    
    
  );
}

export default AppTable;