import { Button } from "antd";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { blogList } from "./blogs";

const Lobby = () => {
    const [blogs, setBlogs] = useState(blogList); // data: blogs.csv using useEffect hook

    const [name, setName] = useState("miguel");

    const handleDeleteBlog = (blogId) => {
        const newBlogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    }, [name]); // dependency array

    return (
        <div id="lobby">
            <BlogList
                blogs={blogs}
                handleDeleteBlog={handleDeleteBlog}
                header="All Blogs"
            />
            <Button onClick={() => setName("luigi")}>change name</Button>
            <p>{name}</p>
        </div>
    );
};

export default Lobby;
