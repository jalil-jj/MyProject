import Index from "./Pages/Index/Index";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Signin/Signin";
import CourseInfo from './Pages/CourseInfo/CourseInfo'
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import Contact from './Pages/Contact/Contact'




const routes = [
    {path:'/' , element : <Index/>},
    {path:'login' , element : <Login/>},
    {path:'signin' , element : <Signin/>},
    {path:'course-info' , element : <CourseInfo/>},
    {path:'article-info' , element : <ArticleInfo/>},
    {path:'contact' , element : <Contact/>}
]


export default routes