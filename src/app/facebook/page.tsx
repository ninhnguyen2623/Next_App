'use client'
import { useRouter } from 'next/navigation'
const Facebook = () =>  {
    const router = useRouter()
    const handleBtn = () => {
        router.push('/')
    }
    return (
        <>
            <h1>facebook</h1>
            <div>
                <button onClick={()=>handleBtn()}>Back Home</button>
            </div>
        </>
    )
}
export default Facebook