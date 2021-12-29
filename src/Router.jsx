import ChildComponent from "./components/Child/Child.component";
import TeacherComponent from "./components/Teacher/Teacher.component";
import ParentComponent from "./components/Parent/Parent.component";

const Routing = (props) => {
    switch (props.page) {
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
export default Routing;