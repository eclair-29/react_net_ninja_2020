import { Card, Button } from "antd";

const BlogCard = ({ blog }) => (
    <Card
        type="inner"
        extra={<Button type="text">Delete</Button>}
        title={blog.title}
    >
        {blog.description}
    </Card>
);

export default BlogCard;
