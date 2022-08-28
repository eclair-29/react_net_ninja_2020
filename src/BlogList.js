import { Card, Button, Typography } from "antd";

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
    const { blogs, header } = props;
    const { Title } = Typography;

    return (
        <div id="blog_list">
            <Title className="blog_header" level={5}>
                {header}
            </Title>
            {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
            ))}
        </div>
    );
};

export default BlogList;
