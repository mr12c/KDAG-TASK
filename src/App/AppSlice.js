import { createSlice,nanoid } from "@reduxjs/toolkit";

const AppSlice =  createSlice({
    name:"AppSlice",
    initialState:{
        courseImg:"",
        categoryarray:[],
        searchQuery:'',
        activeCategory:"",
        courses:[],
        testimonial:[],
        instituteCurrentPage:0

    },
    reducers:{
        addCourse:(state,action)=>{
           const id=nanoid();
            state.courses.push({...action.payload,id})
        },
        addEnrollmentStatus:(state,action)=>{
           let course = state.courses.filter((item)=>item.id==action.payload.id);
           course.isEnrolled=!course.isEnrolled;
        }
        ,setdata:(state,action)=>{
            for(let i=0;i<10;i++){
                state.courses.push({...action.payload[i],price:Math.floor(Math.random() * 40) + 1,index:Math.floor(Math.random()*9),noOfStudentsEnrolled:Math.floor(Math.random() * 10) + 2,noOfHappyLearners:Math.floor(Math.random() * 3) + 1})
            }
           
        },
        setCategoryArray:(state,action)=>{
           state.categoryarray=action.payload;
        },
        setActivecCategory:(state,action)=>{
            state.activeCategory=action.payload;
        },
        setSerchQuery:(state,action)=>{
            state.searchQuery=action.payload;
        },
        setInstituteCurrentPage:(state,action)=>{
            state.instituteCurrentPage=action.payload;
        },
        setlike:(state,action)=>{
            for(let i=0;i<state.courses.length;i++){
                if(state.courses[i].id==action.payload){
                    state.courses[i].isLiked=!state.courses[i].isLiked;
                }
            }
        },
        setCourseImg:(state,action)=>{
            state.courseImg=action.payload;
        }
        
    }
})


export const {addCourse, addEnrollmentStatus,setdata,setCategoryArray,setActivecCategory,setSerchQuery,setInstituteCurrentPage,setlike,setCourseImg} = AppSlice.actions;

export default AppSlice.reducer;