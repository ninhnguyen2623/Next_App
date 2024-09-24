'use client'
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Facebook = () =>  {
    const router = useRouter()
    const handleBtn = () => {
        router.push('/')
    }
    return (
        <>
            <h1>facebook</h1>
            <div>
            <Button variant="primary">Primary</Button>{' '}
                <button onClick={()=>handleBtn()}>Back Home</button>
            </div>
        </>
    )
}
export default Facebook