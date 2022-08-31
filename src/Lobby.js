import { Card, Typography } from "antd";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

// externalize below function component to a new file "Skeleton.js"
const Skeleton = ({ isLoading }) => {
    const skeletonCardKeys = [1, 2, 3, 4];

    return skeletonCardKeys.map((skeletonCardKey) => (
        <Card key={skeletonCardKey} type="inner" loading={isLoading} />
    ));
};

const Lobby = () => {
    const [blogs, setBlogs] = useState([]); // data: blogs.csv using useEffect hook
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const { Title } = Typography;

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:3001/blogs")
                .then((response) => {
                    if (!response.ok) {
                        throw Error(
                            "could not fetch the data for the resource"
                        );
                    }

                    return response.json();
                })
                .then((data) => {
                    setError("");
                    setIsLoading(false);
                    setBlogs(data);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 3000);
    }, []); // dependency array

    return (
        <div id="lobby">
            <Title level={5}>{!error ? "All Blogs" : error}</Title>
            {isLoading && <Skeleton isLoading={isLoading} />}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
};

export default Lobby;
