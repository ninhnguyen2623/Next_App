'use client'
import useSWR, {Fetcher} from "swr"

const ViewDetaiBlog = ({ params }: { params: { id: string } }) => {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url)
        .then((res) => res.json())
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            Title: {data?.title} <br /> Data: {data?.author} <br />Content: {data?.content}
        </div>
    )
}
export default ViewDetaiBlog