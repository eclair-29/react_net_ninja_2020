import { Card } from "antd";

const BlogListLoader = ({ isLoading }) => {
    const skeletonCardKeys = [1, 2, 3, 4, 5];

    return skeletonCardKeys.map((skeletonCardKey) => (
        <Card key={skeletonCardKey} type="inner" loading={isLoading} />
    ));
};

export default BlogListLoader;
