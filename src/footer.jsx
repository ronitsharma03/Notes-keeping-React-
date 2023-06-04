import React from "react";


const date = new Date();
const year = date.getFullYear();
export default function footer() {
    return (
        <footer>
            <p>Copyright&#169; {year} </p>
        </footer>
    )
}