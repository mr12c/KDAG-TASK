import {fetchDataFromApi} from "./util/fetchData"
import { useEffect } from 'react'
import SideNavBar from "./components/SideNavBar";
import {nanoid} from "@reduxjs/toolkit";
import { addCourse } from "./App/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "./App/AppSlice";
import { Outlet } from "react-router-dom";

import { useState } from "react";


function App() {
  let dispatch = useDispatch();
  const [width,setWidth] = useState();
  const [isNavBarVisible,setIsNavBarVisible] = useState(false);

  useEffect(()=>{
    setWidth(window.innerWidth)
  },[])
  const {courses} = useSelector((state)=>state.AppSlice)
  
 
  useEffect(()=>{
   console.log(fetchDataFromApi("/api/businesses.v1/30ea3dc2-bfa9-400a-bbb9-d9c43a1e2387/contents"))
  },[]);


  const myobj= 
    {
      Title:"Python full course -panda,numpi",
      description:"Full python course by top industry l faculyt that offer job assurance and opportunity for developers to learn more about Python programming languages",
      category:"machine learning",
      subjects:["python","tensorflow","sql"],
      mockTest:5,
      videoLec:40,
      Assisngment:5,
      id:nanoid(),
      isEnrolled:false,
      isFavourite:false,
      faculty:[
        
        {name:"Alakh pandey",expInYear:8,avtar:""},
        {name:"Alakh pandey",expInYear:8,avtar:""},
        {name:"Alakh pandey",expInYear:8,avtar:""},
        {name:"Alakh pandey",expInYear:8,avtar:""},
        {name:"Alakh pandey",expInYear:8,avtar:""},
        
      ]
      ,
      noOfStudentsInEnrolled:10000,
      avgRating:4.7,
      content:[[
        {
            title:"Introdution to variables",
            thubnail:"",
            duration:"1hr 40min",
            Assisngment:"yes",
            day:1,

        },
        {
            title:"Scope Of variables",
            thubnail:"",
            duration:"2hr",
            Assisngment:"no",
            day:2
        },
        {
          title:"functions",
          thubnail:"",
          duration:"1hr 10min",
          Assisngment:"no",
          day:3
        },
        {
          title:"functions",
          thubnail:"",
          duration:"1hr 10min",
          Assisngment:"no",
          day:4
        }
      ],[[{
        title:"Introdution to variables",
        thubnail:"",
        duration:"1hr 40min",
        Assisngment:"yes",
        day:1,

    },
    {
        title:"Scope Of variables",
        thubnail:"",
        duration:"2hr",
        Assisngment:"no",
        day:2
    },
    {
      title:"functions",
      thubnail:"",
      duration:"1hr 10min",
      Assisngment:"no",
      day:3
    },
    {
      title:"functions",
      thubnail:"",
      duration:"1hr 10min",
      Assisngment:"no",
      day:4
    }]]],
      posterTitle:"python",
      testimonial:[
        {userName:"vishal",review:""}
      ],
   }

   const data=[{
    title: "Python Full Course - Pandas, NumPy",
    description: "Full python course by top industry faculty that offers job assurance and opportunities for developers to learn more about Python programming languages.",
    category: "machine learning",
    subjects: ["python", "tensorflow", "sql"],
    mockTest: 5,
    videoLec: 40,
    assignment: 5,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Alakh Pandey", expInYear: 8, avatar: "" },
      { name: "Alakh Pandey", expInYear: 8, avatar: "" },
      { name: "Alakh Pandey", expInYear: 8, avatar: "" },
      { name: "Alakh Pandey", expInYear: 8, avatar: "" },
      { name: "Alakh Pandey", expInYear: 8, avatar: "" },
    ],
    noOfStudentsEnrolled: 10000,
    avgRating: 4.7,
    content: [
      [
        {
          title: "Introduction to Variables",
          thumbnail: "",
          duration: "1hr 40min",
          assignment: "yes",
          day: 1,
        },
        {
          title: "Scope of Variables",
          thumbnail: "",
          duration: "2hr",
          assignment: "no",
          day: 2,
        },
        {
          title: "Functions",
          thumbnail: "",
          duration: "1hr 10min",
          assignment: "no",
          day: 3,
        },
        {
          title: "Functions",
          thumbnail: "",
          duration: "1hr 10min",
          assignment: "no",
          day: 4,
        },
      ],
      [
        {
          title: "Introduction to Variables",
          thumbnail: "",
          duration: "1hr 40min",
          assignment: "yes",
          day: 1,
        },
        {
          title: "Scope of Variables",
          thumbnail: "",
          duration: "2hr",
          assignment: "no",
          day: 2,
        },
        {
          title: "Functions",
          thumbnail: "",
          duration: "1hr 10min",
          assignment: "no",
          day: 3,
        },
        {
          title: "Functions",
          thumbnail: "",
          duration: "1hr 10min",
          assignment: "no",
          day: 4,
        },
      ],
    ],
    posterTitle: "Python",
    testimonial: [
      { userName: "Vishal", review: "" }
    ],
  },
  {
    title: "Machine Learning with TensorFlow",
    description: "Comprehensive course on machine learning using TensorFlow, covering both theory and practical applications.",
    category: "machine learning",
    subjects: ["tensorflow", "machine learning", "python"],
    mockTest: 6,
    videoLec: 45,
    assignment: 7,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Andrew Ng", expInYear: 10, avatar: "" },
      { name: "Geoffrey Hinton", expInYear: 12, avatar: "" },
    ],
    noOfStudentsEnrolled: 15000,
    avgRating: 4.8,
    content: [
      [
        {
          title: "Introduction to TensorFlow",
          thumbnail: "",
          duration: "2hr",
          assignment: "yes",
          day: 1,
        },
        {
          title: "Building Neural Networks",
          thumbnail: "",
          duration: "3hr",
          assignment: "yes",
          day: 2,
        },
        {
          title: "Training and Optimization",
          thumbnail: "",
          duration: "2hr 30min",
          assignment: "yes",
          day: 3,
        },
        {
          title: "Deployment",
          thumbnail: "",
          duration: "1hr 50min",
          assignment: "yes",
          day: 4,
        },
      ],
      [
        {
          title: "Advanced Techniques",
          thumbnail: "",
          duration: "3hr",
          assignment: "yes",
          day: 5,
        },
      ],
    ],
    posterTitle: "TensorFlow",
    testimonial: [
      { userName: "Alice", review: "Great course with practical examples." },
    ],
  },
  // AI Courses
  {
    title: "Artificial Intelligence for Beginners",
    description: "A beginner-friendly course to introduce AI concepts and applications.",
    category: "AI",
    subjects: ["AI", "machine learning", "python"],
    mockTest: 4,
    videoLec: 30,
    assignment: 3,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Sebastian Thrun", expInYear: 9, avatar: "" },
      { name: "Yoshua Bengio", expInYear: 11, avatar: "" },
    ],
    noOfStudentsEnrolled: 12000,
    avgRating: 4.6,
    content: [
      [
        {
          title: "Introduction to AI",
          thumbnail: "",
          duration: "1hr 30min",
          assignment: "yes",
          day: 1,
        },
        {
          title: "Machine Learning Basics",
          thumbnail: "",
          duration: "2hr",
          assignment: "yes",
          day: 2,
        },
        {
          title: "AI in Real World",
          thumbnail: "",
          duration: "2hr 10min",
          assignment: "no",
          day: 3,
        },
      ],
    ],
    posterTitle: "AI Basics",
    testimonial: [
      { userName: "Bob", review: "Informative and easy to understand." },
    ],
  },
  // Business Management Courses
  {
    title: "Leadership and Management",
    description: "Learn essential leadership skills and effective management techniques.",
    category: "business management",
    subjects: ["leadership", "management", "communication"],
    mockTest: 3,
    videoLec: 25,
    assignment: 4,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "John Maxwell", expInYear: 15, avatar: "" },
      { name: "Peter Drucker", expInYear: 20, avatar: "" },
    ],
    noOfStudentsEnrolled: 8000,
    avgRating: 4.9,
    content: [
      [
        {
          title: "Introduction to Leadership",
          thumbnail: "",
          duration: "1hr",
          assignment: "yes",
          day: 1,
        },
        {
          title: "Management Strategies",
          thumbnail: "",
          duration: "1hr 30min",
          assignment: "yes",
          day: 2,
        },
        {
          title: "Effective Communication",
          thumbnail: "",
          duration: "2hr",
          assignment: "no",
          day: 3,
        },
      ],
    ],
    posterTitle: "Leadership",
    testimonial: [
      { userName: "Charlie", review: "Highly recommended for new managers." },
    ],
  },
  // Graphic Design Courses
  {
    title: "Graphic Design Masterclass",
    description: "Master graphic design with this comprehensive course covering all essential tools and techniques.",
    category: "graphic design",
    subjects: ["photoshop", "illustrator", "indesign"],
    mockTest: 2,
    videoLec: 50,
    assignment: 10,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Jessica Walsh", expInYear: 12, avatar: "" },
      { name: "David Carson", expInYear: 15, avatar: "" },
    ],
    noOfStudentsEnrolled: 7000,
    avgRating: 4.8,
    content: [
      [
        {
          title: "Introduction to Graphic Design",
          thumbnail: "",
          duration: "2hr",
          assignment: "yes",
          day: 1,
        },
        {
          title: "Photoshop Basics",
          thumbnail: "",
          duration: "3hr",
          assignment: "yes",
          day: 2,
        },
        {
          title: "Illustrator Techniques",
          thumbnail: "",
          duration: "2hr 30min",
          assignment: "yes",
          day: 3,
        },
        {
          title: "InDesign Essentials",
          thumbnail: "",
          duration: "1hr 50min",
          assignment: "yes",
          day: 4,
        },
      ],
      [
        {
          title: "Advanced Graphic Design",
          thumbnail: "",
          duration: "3hr",
          assignment: "yes",
          day: 5,
        },
      ],
    ],
    posterTitle: "Graphic Design",
    testimonial: [
      { userName: "Dana", review: "Amazing course with hands-on projects." },
    ],
  },
  // Digital Marketing Courses
  {
    title: "Digital Marketing 101",
    description: "Learn the fundamentals of digital marketing and how to create successful campaigns.",
    category: "digital marketing",
    subjects: ["SEO", "content marketing", "social media"],
    mockTest: 3,
    videoLec: 35,
    assignment: 5,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Neil Patel", expInYear: 10, avatar: "" },
      { name: "Rand Fishkin", expInYear: 12, avatar: "" },
    ],
    noOfStudentsEnrolled: 9000,
    avgRating: 4.7,
    content: [
      [
        {
          title: "Introduction to Digital Marketing",
          thumbnail: "",
          duration: "1hr 30min",
          assignment: "yes",
          day: 1,
        },
        {
          title: "SEO Basics",
          thumbnail: "",
          duration: "2hr",
          assignment: "yes",
          day: 2,
        },
        {
          title: "Content Marketing",
          thumbnail: "",
          duration: "2hr 10min",
          assignment: "yes",
          day: 3,
        },
        {
          title: "Social Media Strategies",
          thumbnail: "",
          duration: "1hr 50min",
          assignment: "yes",
          day: 4,
        },
      ],
    ],
    posterTitle: "Digital Marketing",
    testimonial: [
      { userName: "Eve", review: "Great insights and practical tips." },
    ],
  },
  
  {
    title: "Consulting Skills for Professionals",
    description: "Enhance your consulting skills and learn effective client management strategies.",
    category: "consultant",
    subjects: ["consulting", "client management", "business strategy"],
    mockTest: 2,
    videoLec: 20,
    assignment: 4,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Michael Porter", expInYear: 25, avatar: "" },
      { name: "Clayton Christensen", expInYear: 20, avatar: "" },
    ],
    noOfStudentsEnrolled: 5000,
    avgRating: 4.5,
    content: [
      [
        {
          title: "Introduction to Consulting",
          thumbnail: "",
          duration: "1hr",
          assignment: "yes",
          day: 1,
        },
        {
          title: "Client Management Techniques",
          thumbnail: "",
          duration: "1hr 30min",
          assignment: "yes",
          day: 2,
        },
        {
          title: "Business Strategy Development",
          thumbnail: "",
          duration: "2hr",
          assignment: "no",
          day: 3,
        },
      ],
    ],
    posterTitle: "Consulting",
    testimonial: [
      { userName: "Frank", review: "Very useful for aspiring consultants." },
    ],
  },
   
  {
    title: "Prompt Engineering for AI",
    description: "Learn how to design and optimize prompts for AI systems.",
    category: "prompt engineering",
    subjects: ["AI", "NLP", "prompt design"],
    mockTest: 4,
    videoLec: 30,
    assignment: 6,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Chris Olah", expInYear: 7, avatar: "" },
      { name: "Dario Amodei", expInYear: 8, avatar: "" },
    ],
    noOfStudentsEnrolled: 6000,
    avgRating: 4.6,
    content: [
      [
        {
          title: "Introduction to Prompt Engineering",
          thumbnail: "",
          duration: "1hr 20min",
          assignment: "yes",
          day: 1,
        },
        {
          title: "NLP Basics",
          thumbnail: "",
          duration: "2hr",
          assignment: "yes",
          day: 2,
        },
        {
          title: "Designing Effective Prompts",
          thumbnail: "",
          duration: "2hr 30min",
          assignment: "yes",
          day: 3,
        },
        {
          title: "Optimization Techniques",
          thumbnail: "",
          duration: "1hr 40min",
          assignment: "yes",
          day: 4,
        },
      ],
    ],
    posterTitle: "Prompt Engineering",
    testimonial: [
      { userName: "Grace", review: "Highly specialized and practical." },
    ],
  },
  
  {
    title: "Full Stack Web Development",
    description: "Become a full stack web developer with this extensive course covering both front-end and back-end technologies.",
    category: "web developer",
    subjects: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
    mockTest: 5,
    videoLec: 60,
    assignment: 8,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Brad Traversy", expInYear: 10, avatar: "" },
      { name: "Angela Yu", expInYear: 8, avatar: "" },
    ],
    noOfStudentsEnrolled: 20000,
    avgRating: 4.9,
    content: [
      [
        {
          title: "HTML Fundamentals",
          thumbnail: "",
          duration: "2hr",
          assignment: "yes",
          day: 1,
        },
        {
          title: "CSS Styling",
          thumbnail: "",
          duration: "3hr",
          assignment: "yes",
          day: 2,
        },
        {
          title: "JavaScript Basics",
          thumbnail: "",
          duration: "2hr 30min",
          assignment: "yes",
          day: 3,
        },
        {
          title: "React Development",
          thumbnail: "",
          duration: "3hr",
          assignment: "yes",
          day: 4,
        },
        {
          title: "Node.js and Express",
          thumbnail: "",
          duration: "2hr 50min",
          assignment: "yes",
          day: 5,
        },
      ],
      [
        {
          title: "Full Stack Project",
          thumbnail: "",
          duration: "5hr",
          assignment: "yes",
          day: 6,
        },
      ],
    ],
    posterTitle: "Full Stack Development",
    testimonial: [
      { userName: "Hannah", review: "Comprehensive and detailed." },
    ],
  },
   
  {
    title: "Advanced Data Analysis",
    description: "Deep dive into advanced data analysis techniques and tools.",
    category: "machine learning",
    subjects: ["python", "R", "data analysis"],
    mockTest: 4,
    videoLec: 35,
    assignment: 6,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Hadley Wickham", expInYear: 12, avatar: "" },
    ],
    noOfStudentsEnrolled: 11000,
    avgRating: 4.7,
    content: [
      [
        {
          title: "Advanced Python Techniques",
          thumbnail: "",
          duration: "2hr",
          assignment: "yes",
          day: 1,
        },
        {
          title: "R for Data Science",
          thumbnail: "",
          duration: "2hr 30min",
          assignment: "yes",
          day: 2,
        },
        {
          title: "Data Visualization",
          thumbnail: "",
          duration: "1hr 50min",
          assignment: "yes",
          day: 3,
        },
      ],
    ],
    posterTitle: "Data Analysis",
    testimonial: [
      { userName: "Ivy", review: "Great course with practical examples." },
    ],
  },
  {
    title: "AI for Healthcare",
    description: "Learn how AI is transforming the healthcare industry.",
    category: "AI",
    subjects: ["AI", "healthcare", "machine learning"],
    mockTest: 3,
    videoLec: 25,
    assignment: 4,
    id: nanoid(),
    isEnrolled: false,
    isFavourite: false,
    faculty: [
      { name: "Fei-Fei Li", expInYear: 9, avatar: "" },
      { name: "Eric Topol", expInYear: 10, avatar: "" },
    ],
    noOfStudentsEnrolled: 8000,
    avgRating: 4.6,
    content: [
      [
        {
          title: "AI in Medical Imaging",
          thumbnail: "",
          duration: "2hr",
          assignment: "yes",
          day: 1,
        },
        {
          title: "Predictive Analytics in Healthcare",
          thumbnail: "",
          duration: "2hr 30min",
          assignment: "yes",
          day: 2,
        },
        {
          title: "AI in Drug Discovery",
          thumbnail: "",
          duration: "1hr 50min",
          assignment: "yes",
          day: 3,
        },
      ],
    ],
    posterTitle: "AI in Healthcare",
    testimonial: [
      { userName: "Jack", review: "Informative and well-structured." },
    ],
  }
  
]


   useEffect(()=>{
     dispatch(setdata(data))
   },[])
  
  useEffect(()=>{
    if(width>500){
      setIsNavBarVisible(prev=>!prev)
    }
  },[width])
  
   



  return (


      <div className="w-screen h-screen bg-[#f3f2f2] flex justify-between "> 
      <div className={`text-[3rem] z-[1000] right-[-1%] bg-white w-full fixed ${width<500? "" : "displaynone"}`} ><i onClick={()=>{
        setIsNavBarVisible(prev=>!prev)
        console.log(isNavBarVisible)
      }} className="fa-solid fa-bars ml-[80%]"></i></div>
     <SideNavBar visible={isNavBarVisible}/>
      <div className={`absolute right-[-1%] ${width<500 ? "mt-[4rem]" : ""} `} >
      <Outlet 
     /> 
      </div>
    
     </div>
   
  )
}

export default App
