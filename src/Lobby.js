import { Typography } from "antd";
import BlogList from "./BlogList";
import BlogListLoader from "./BlogListLoader";
import useFetch from "./useFetch";

const Lobby = () => {
    const { Title } = Typography;
    const { records, isLoading, error } = useFetch(
        "http://localhost:3001/blogs"
    );

    const blogs = records;

    return (
        <div id="lobby">
            <Title level={5}>{!error ? "All Blogs" : error}</Title>
            {isLoading && <BlogListLoader isLoading={isLoading} />}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
};

export default Lobby;
