import { useState } from "react";
import BlogList from "./BlogList";
import { blogList } from "./blogs";

const Lobby = () => {
    const [blogs, setBlogs] = useState(blogList); // data: blogs.csv using useEffect hook

    const handleDeleteBlog = (blogId) => {
        const newBlogs = blogs.filter((blog) => blog.id != blogId);
        setBlogs(newBlogs);
    };

    return (
        <div id="lobby">
            <BlogList
                blogs={blogs}
                handleDeleteBlog={handleDeleteBlog}
                header="All Blogs"
            />
        </div>
    );
};

export default Lobby;
