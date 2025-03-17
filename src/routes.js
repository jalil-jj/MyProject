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
import GeneralDiscount from "./Pages/AdminPanel/GeneralDiscount/GeneralDiscount";
import AdminCategoty from "./Pages/AdminPanel/AdminCategoty/AdminCategoty";
import AdminTickets from "./Pages/AdminPanel/AdminTickets/AdminTickets";
import AdminContacts from "./Pages/AdminPanel/AdminContacts/AdminContacts";


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
            {path : 'general-discount' , element : <GeneralDiscount/>},
            {path : 'category' , element : <AdminCategoty/>},
            {path : 'tickets' , element : <AdminTickets/>},
            {path : 'contacts' , element : <AdminContacts/>},
        ]
    }









]


export default routes