import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import { RouterProvider } from 'react-router-dom'
import Courses from './components/Courses.jsx'
import Library from './components/Library.jsx'
import Contact from './components/Contact.jsx'
import CoursePage from  "./components/CoursePage.jsx"
import { register } from 'swiper/element/bundle';
import {store }from './App/index.js'
import { Provider } from 'react-redux'
import CourseContentPage from './components/CourseContentPage.jsx'
register();

const router =  createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
   <Route path="/home" element={<Home/>}/>
    <Route path="/courses" element={<Courses></Courses>}/>
    <Route path="/library" element={<Library></Library>}/>
    <Route path="/:id" element={<CoursePage></CoursePage>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/course/:course_id' element={<CourseContentPage/>}/>
  </Route>
))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

     
    
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
