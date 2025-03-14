import Index from "./Pages/Index/Index";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Signin/Signin";
import CourseInfo from './Pages/CourseInfo/CourseInfo'
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import Contact from './Pages/Contact/Contact'
import CourseCategory from './Pages/CourseCategory/CourseCategory'


import AdminCourses from './Pages/AdminPanel/AdminCourses/AdminCourses'
import AdminPanel from './Pages/AdminPanel/index'
import Sessions from "./Pages/AdminPanel/Sessions/Sessions";
import AdminUsers from "./Pages/AdminPanel/AdminUsers/AdminUsers";
import Offs from "./Pages/AdminPanel/Offs/Offs";



const routes = [
    {path:'/' , element : <Index/>},
    {path:'login' , element : <Login/>},
    {path:'signin' , element : <Signin/>},
    {path:'course-info' , element : <CourseInfo/>},
    {path:'article-info' , element : <ArticleInfo/>},
    {path:'contact' , element : <Contact/>},
    {path:'category-info' , element : <CourseCategory/>},


    {
        path : '/p-admin/*' , 
        element : <AdminPanel /> , children : [
            {path : 'courses' , element : <AdminCourses/>},
            {path : 'sessions' , element : <Sessions/>},
            {path : 'users' , element : <AdminUsers/>},
            {path : 'offs' , element : <Offs/>},
        ]
    }









]


export default routes