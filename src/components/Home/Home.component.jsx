import React, { useState } from 'react';
import Routing from "../../Router";
export default function HomeComponent() {
    const [page, setPage] = useState(0);

    return (
        <div>
            <button onClick={() => setPage(1)}>Child Page</button>
            <button onClick={() => setPage(2)}>Teacher Page</button>
            <button onClick={() => setPage(3)}>Parent Page</button>
            <hr />
            This is Home Page
            <hr />
            <Routing page={page}/>
        </div>
    );
}
