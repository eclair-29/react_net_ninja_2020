import { useState } from "react";
import BlogList from "./BlogList";
import { blogList } from "./blogs";

const Lobby = () => {
    const [blogs, setBlogs] = useState(blogList); // data: blogs.csv

    return (
        <div id="lobby">
            <BlogList blogs={blogs} header="All Blogs" />
            <BlogList
                blogs={blogs.filter(
                    (blog) => blog.author === "Miguel A. De Chavez"
                )}
                header="My Blogs"
            />
        </div>
    );
};

export default Lobby;
