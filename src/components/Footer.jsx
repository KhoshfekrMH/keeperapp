import React from "react"

function Footing() {
    const data = new Date();
    const currentTimeYear = data.getFullYear();
    return (
        <footer>
            <p>Created By Mr.Khoshfehr {currentTimeYear}</p>
        </footer>
    );
}

export default Footing;