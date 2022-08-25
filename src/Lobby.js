import { useState } from "react";
import BlogList from "./BlogList";
import { blogList } from "./blogs";

const Lobby = () => {
    const [blogs, setBlogs] = useState(blogList); // data: blogs.csv

    return (
        <div id="lobby">
            <BlogList blogs={blogs} />
        </div>
    );
};

export default Lobby;
