import { useState } from "react";
import BlogList from "./BlogList";

const Lobby = () => {
    const [blogs, setBlogs] = useState(null); // data: blogs.csv

    return (
        <div className="content" id="lobby">
            <BlogList blogs={blogs} header="All Blogs!" />
        </div>
    );
};

export default Lobby;
