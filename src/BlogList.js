const BlogList = (props) => {
    const { blogs, header } = props;

    return (
        <div id="blog_list">
            <h3>{header}</h3>
        </div>
    );
};

export default BlogList;
