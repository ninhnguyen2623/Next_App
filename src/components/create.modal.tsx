'use client'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import stModal from '@/styles/app.modal.module.css'
import { toast } from 'react-toastify'
interface IProps {
  showModalCreate: boolean
  setShowModalCreate: (value: boolean) => void
}
function CreateModal(props: IProps) {

  const { showModalCreate, setShowModalCreate } = props
  const [title, setTitle] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [validationMsg, setValidationMsg] = useState('')
  const [errTitle, setErrTitle] = useState('')
  const [errAuthor, setErrAuthor] = useState('')
  const [errContent, setErrContent] = useState('')

  const ValidateAll = () => {
    let checker = true
    if(title == ''){
       setErrTitle('Vui lòng không để trống Title')
      checker = false       
    }
    if(author == ''){
       setErrAuthor('Vui lòng không để trống Author')
       checker = false 
    }
     if(content == ''){
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
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title,author,content})
    }).then(res => res.json())
      .then(res => {
        if(res) {
          toast.success("add data success")
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
    setShowModalCreate(false)
    toast.error("jejejee")
  }
  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
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
          <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;