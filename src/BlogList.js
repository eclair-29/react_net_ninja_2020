import BlogCard from "./BlogCard";

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
