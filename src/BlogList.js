import { Card, Button } from "antd";

// externalize below function component to a new file "BlogCard.js"
const BlogCard = ({ blog }) => (
    <Card
        type="inner"
        extra={<Button type="text">Delete</Button>}
        title={blog.title}
    >
        {blog.description}
    </Card>
);

const BlogList = (props) => {
    const { blogs } = props;

    return (
        <div id="blog_list_container">
            {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
            ))}
        </div>
    );
};

export default BlogList;
