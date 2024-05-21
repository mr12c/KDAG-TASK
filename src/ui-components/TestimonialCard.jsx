import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import img1 from '../assets/image1.png'
import 'swiper/swiper-bundle.css';
import { useState ,useEffect} from 'react';
function TestimonialCard({item,index}) {

    const url=`https://api.unsplash.com/search/photos?page=${index}&query=user&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
    let [imgs,setImg] = useState();
       useEffect(()=>{
        fetch(url).then((res)=>{
          return res.json()
        }).then((data)=>{console.log(data)
           return data.results
         
        }).then((data)=>{setImg(data[0])}).catch((err)=>{console.log(err)})
       },[url])
  return (
    <div className='bg-[#eae8e8] w-[50%] tcnw pt-4  rounded-lg mx-auto mb-16 overflow-hidden'>
        <div className='text-[black] text-[0.9rem] p-4'>
            <p className='testpara p-2'>
                <p><svg width="45" height="36"  fill="black"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path></svg></p>
                 <p className='p-4 font-medium text-[#424141]'>Lorem ipsum dolor, sit amet consectetur   doloribus reprehenderit ad necessitatibus odio quas, voluptatem corporis in nobis nulla. adipisicing elit. Deserunt amet tempore eveniet aperiam quos in magni nemo accusantium vel harum.</p></p>
        </div>
        <div className='w-full bg-[#c73939] flex justify-between items-center p-4'>
             <div className='flex items-center gap-4'>
                <div className='w-[5rem] h-[5rem] rounded-full bg-white overflow-hidden'><img src={imgs?.urls?.regular} className='testimg' alt="" /></div>
            <div className='text-white'>
                <p className='capitalize font-medium'>{item.name}</p>
                <p className='text-[#d1d0d0] text-[0.9rem]'>{item.email}</p>
            </div></div>
            <div className='text-[1.4rem] text-[white]'>
                <CiTwitter/>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard