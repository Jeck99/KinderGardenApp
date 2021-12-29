import React, { useState } from 'react';

export default function HomeComponent() {
    const [page, setPage] = useState(0);
    const Routing = () => { };
    return (
        <div>
            <button onClick={()=>setPage(1)}>Child Page</button>
            <button onClick={()=>setPage(2)}>Teacher Page</button>
            <button onClick={()=>setPage(3)}>Parent Page</button>
            <hr />
            This is Home Page
        </div>
    );
}
