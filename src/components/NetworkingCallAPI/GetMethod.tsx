import React from 'react'

// định nghĩ kiểu dữ liệu
interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const GetMethod = () => {
    let [posts, setPosts] = React.useState<[PostType] | null>(null);
    let [loading, setLoading] = React.useState(false);

    console.log(posts);

    React.useEffect(()=>{
        let fetchedPosts = async () =>{
            try {
              setLoading(true);
                // Method GET
                const respone = await fetch('https://jsonplaceholder.typicode.com/posts')
                let result = await respone.json();
                console.log(result);
                setPosts(result);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchedPosts();
    },[])
  return (
    <div>
      <h1>GetMethod</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {
          posts && posts.length > 0 && posts.map((post)=>{
            return(
              <li>{post.title}</li>
            )
          })
        }
      </ul>
    </div>
    
  )
}

export default GetMethod