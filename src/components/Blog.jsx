function Blog() {
    const title = `Welcome to the new blog`
    const likes = 50;
    const link = `http://www.google.com`

    return (
        <div className="content">
            <h1>{title}</h1>
            <p>Liked {likes} times</p>
            <a href={link}>Google.com</a>
        </div>
    )
}

export default Blog;