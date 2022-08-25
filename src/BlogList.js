import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";

const actionIcons = [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
];

const BlogCard = ({ blog }) => (
    <Card title={blog.title} actions={actionIcons}>
        {blog.description}
    </Card>
);

const BlogList = (props) => {
    const { blogs } = props;

    return (
        <div id="blog_list">
            {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
            ))}
        </div>
    );
};

export default BlogList;
