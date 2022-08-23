const Lobby = () => {
    const handleClickEvent = (e) => console.log("event object ", e.target.id);

    return (
        <div className="content" id="lobby">
            <h3>Lobby Page</h3>
            {/* click event call without args */}
            <button id="button_click" onClick={handleClickEvent}>
                Click Me
            </button>

            {/* click event call with args */}
            {/* <button onClick={() => handleClickEvent("Miguel")}>Click Me</button> */}
        </div>
    );
};

export default Lobby;
