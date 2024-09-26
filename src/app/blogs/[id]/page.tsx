const ViewDetaiBlog = ({ params }: { params:{ id: string }}) => {
    console.log(">>> check props",params);
    return (
        <div>
            view detai blog {params.id}
        </div>
    )
}
export default ViewDetaiBlog