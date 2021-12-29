import ChildComponent from "./components/Child/Child.component";
import TeacherComponent from "./components/Teacher/Teacher.component";
import ParentComponent from "./components/Parent/Parent.component";
import HomeComponent from "./components/Home/Home.component";
import { Routes, Route} from 'react-router-dom';
const Routing = () => {
    return (
            <Routes>
                <Route path="/child" element={<ChildComponent />} />
                <Route exact path="/" element={<HomeComponent />} />
                <Route path="/teacher" element={<TeacherComponent />} />
                <Route path="/parent" element={<ParentComponent />} />
            </Routes>
    )
};
export default Routing;