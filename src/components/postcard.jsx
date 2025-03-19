import Button from "./LikeButton"

const Postcard = ({post}) => {
    return(
        <div>
            <img style={{width: "200px"}} src={post.profileImage} alt="" />
            <h2>Name : {post.username}</h2>
            <p>{post.content}</p>
            <Button/>
        </div>
    )
}

export default Postcard;