import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';
function ListItem({ linkVal, problemName, sno }) {
    // console.log(linkVal);
    return (
        <>
            <tr>
                <td>{sno}</td>
                <td>{problemName}</td>
                <td>
                    <Link to={linkVal} target="_blank">
                        Link
                    </Link>
                </td>
            </tr>
        </>
    );
}

export default ListItem;
