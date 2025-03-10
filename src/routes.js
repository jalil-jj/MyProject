import Index from "./Pages/Index/Index";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Signin/Signin";
import CourseInfo from './Pages/CourseInfo/CourseInfo'




const routes = [
    {path:'/' , element : <Index/>},
    {path:'login' , element : <Login/>},
    {path:'signin' , element : <Signin/>},
    {path:'course-info' , element : <CourseInfo/>}
]


export default routes