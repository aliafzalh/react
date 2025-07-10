function Data(){
  
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
    ]);

    return(
        blogs
    )
}


export default Data;