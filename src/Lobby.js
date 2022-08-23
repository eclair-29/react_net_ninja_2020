import { useState } from "react";

const Lobby = () => {
    const [user, setUser] = useState("Miguel");
    const [age, setAge] = useState(26);

    const handleClickEvent = () => {
        setUser("Michael");
        setAge(25);
    };

    return (
        <div className="content" id="lobby">
            <h3>
                {user} is {age} years old
            </h3>
            <button id="button_click" onClick={handleClickEvent}>
                Click Me
            </button>
        </div>
    );
};

export default Lobby;
