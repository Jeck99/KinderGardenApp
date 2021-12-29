import React, { useState } from 'react';
import ChildComponent from "../Child/Child.component";
import TeacherComponent from "../Teacher/Teacher.component";
import ParentComponent from "../Parent/Parent.component";
export default function HomeComponent() {
    const [page, setPage] = useState(0);
    const Routing = () => {
        switch (page) {
            case 1:
                return <ChildComponent />
            case 2:
                return <TeacherComponent />
            case 3:
                return <ParentComponent />
            default:
                return <div></div>;
        }
    };
    return (
        <div>
            <button onClick={() => setPage(1)}>Child Page</button>
            <button onClick={() => setPage(2)}>Teacher Page</button>
            <button onClick={() => setPage(3)}>Parent Page</button>
            <hr />
            This is Home Page
            <hr />
            <Routing/>
        </div>
    );
}
