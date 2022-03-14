import { useState } from "react"

const Posts = () => {

        const [PostsData, setPostsData] = useState([])

        const posts = fetch('https://jsonplaceholder.typicode.com/posts')
        const alljsonposts = posts.then((post_json)=>post_json.json())
        alljsonposts.then((aPosts)=>setPostsData(aPosts))
       

    return(
        <div className="container">
            {
                PostsData.map((post)=>{
                    return(
                        <div>
                            <h1>{post.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )


}
 
export default Posts;