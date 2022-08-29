import { Card, Button, Typography } from "antd";

const BlogCard = ({ blog, handleDeleteBlog }) => (
    <Card
        type="inner"
        extra={
            <Button type="text" onClick={() => handleDeleteBlog(blog.id)}>
                Delete
            </Button>
        }
        title={blog.title}
    >
        {blog.description}
    </Card>
);

const BlogList = (props) => {
    const { blogs, header, handleDeleteBlog } = props;
    const { Title } = Typography;

    return (
        <div id="blog_list">
            <Title level={5}>{header}</Title>
            {blogs.map((blog) => (
                <BlogCard
                    blog={blog}
                    handleDeleteBlog={handleDeleteBlog}
                    key={blog.id}
                />
            ))}
        </div>
    );
};

export default BlogList;
