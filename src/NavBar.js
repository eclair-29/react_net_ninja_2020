import { Typography } from "antd";

const NavBar = () => {
    const { Title, Link } = Typography;

    return (
        <nav id="navbar">
            <Title level={5} id="logo">
                brand
            </Title>
            <div>
                <Link href="/">Lobby</Link>
                <Link href="/createblog">Create Blog</Link>
            </div>
        </nav>
    );
};

export default NavBar;
