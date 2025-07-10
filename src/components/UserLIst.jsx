// function UserList (){}

import { useEffect, useState } from "react";
import BlogList from "./BlogList";

// function User () {
//     const [blogs, setBlogs] = useState([
//         {title: 'My new website', body: 'loream ipsum', id: 1}
//     ])
// }

const User = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'My new Website',
            body: 'lorem ipsum',
            author: 'Mario',
            id: 1
        },
        {
            title: 'Welcome party',
            body: 'lorem ipsum',
            author: 'Yoshi',
            id: 2
        },
        {
            title: 'Web dev top tips',
            body: 'lorem ipsum',
            author: 'Mario',
            id: 3
        }
    ])

    const [name, setName] = useState('Mario')

        const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !==id)
            setBlogs(newBlogs)

        }

        useEffect(() =>{
            console.log(`use effect ran`)
            console.log(blogs)
        }, [])

    return (
        <div className="user">
              <BlogList blogs = {blogs} title = "All Blogs!!" handleDelete={handleDelete}/>
              <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} 
              title={<b>Mario's blogs</b>}/>
              <p>{name}</p>
              <button onClick={() => setName('Luigi')}>Change name</button>
              
              


            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>
            ))} */}
        </div>
    )
}


export default User;