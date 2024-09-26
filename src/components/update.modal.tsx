'use client'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import stModal from '@/styles/app.modal.module.css'
import { toast } from 'react-toastify'
import { mutate } from "swr"
interface IProps {
  showModalUpdate: boolean
  setShowModalUpdate: (value: boolean) => void
  blog: IBlog | null
  setBlog: (value: IBlog | null) => void
}
function UpdateModal(props: IProps) {

  const { showModalUpdate, setShowModalUpdate, blog, setBlog } = props
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [errTitle, setErrTitle] = useState('')
  const [errAuthor, setErrAuthor] = useState('')
  const [errContent, setErrContent] = useState('')
 
  useEffect(() => {
        if(blog && blog.id){
            setId(blog.id)
            setTitle(blog.title)
            setAuthor(blog.author)
            setContent(blog.content)
        }
  },[blog]) 

  const ValidateAll = () => {
    let checker = true
    if(!title){
       setErrTitle('Vui lòng không để trống Title')
      checker = false       
    }
    if(!author){
       setErrAuthor('Vui lòng không để trống Author')
       checker = false 
    }
     if(!content){
       setErrContent('Vui lòng không để trống Content')
       checker = false
    }
    return checker
 }

  const handleSubmit = () =>{
    toast.success("dfsadfs")
    if(title != ''){
      setErrTitle('')    
   }
   if(author != ''){
      setErrAuthor('')
   }
    if(content != ''){
      setErrContent('')
   }
    // console.log('check data :',title,author,content)
   if(ValidateAll() == true){
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title,author,content})
    }).then(res => res.json())
      .then(res => {
        if(res) {
          toast.success("add data success")
          handleCloseModal()
          mutate('http://localhost:8000/blogs')
        }
      })
   }
   
  }
  const handleCloseModal = () => {
    setTitle("")
    setAuthor("")
    setContent("") 
    setErrTitle("")
    setErrAuthor("")
    setErrContent("")
    setBlog(null)
    setShowModalUpdate(false)
    toast.error("jejejee")
  }
  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="email" placeholder="..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className={stModal['check-error']}>{errTitle}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control type="email" placeholder="..." 
               value={author}
               onChange={(e) => setAuthor(e.target.value)}/>
                <div className={stModal['check-error']}>{errAuthor}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} 
               value={content}
               onChange={(e) => setContent(e.target.value)}
               />
                <div className={stModal['check-error']}>{errContent}</div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="warning" onClick={() => handleSubmit()}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;