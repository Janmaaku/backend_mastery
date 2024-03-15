import { DiscoverModel } from '../../model/DiscoverModel'
import Footer from '../../components/footer/Footer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './RootState'; // Import the RootState type
import { setCourses } from '../../store/Course-Slice';

//Discover Backend array
const discovercards: DiscoverModel[] = [
  { id: 1, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531465/Back-End%20Mastery/backend_cards/1b_tmxo6s.png', title: 'Course 1', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 2, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531479/Back-End%20Mastery/backend_cards/2b_cmyopp.png', title: 'Course 2', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 3, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531487/Back-End%20Mastery/backend_cards/3b_yeyuqa.png', title: 'Course 3', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 4, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531495/Back-End%20Mastery/backend_cards/4b_whfydb.png', title: 'Course 4', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 5, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531501/Back-End%20Mastery/backend_cards/5b_cspggj.png', title: 'Course 5', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 6, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531506/Back-End%20Mastery/backend_cards/6b_ca2pqh.png', title: 'Course 6', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
]



const Students = () => {

  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courses.courses);


  useEffect(() => {
    // Simulating async fetch of courses
    setTimeout(() => {
      // Simulated fetched courses
      const fetchedCourses: DiscoverModel[] = discovercards; // Simulating API call response
      
      // Dispatch action to set courses in Redux store
      dispatch(setCourses(fetchedCourses));
    }, 1000); // Simulating delay of 1 second (1000ms) as if fetching from an API
  }, [dispatch]);


  return (
    <><div className='mt-32 container mx-auto mb-32'>
        <h1 className='text-5xl text-center font-bold mt-10'>Welcome to Back-End Mastery</h1>
         <p className='text-xl text-center text-gray-500 mt-5'>Check out the courses available below.</p>
         <h1 className='text-5xl text-center font-semibold mt-10'>Enrol to Get Started</h1>
      <div
          className=' mt-20 px-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11'
      >
        
        {discovercards.map((discovercard) => (
            <div
                key={discovercard.id}
                className='p-5 rounded-md text-center bg-slate-300'
            >
                  <img
                      className='w-full h-64 rounded-md' 
                      src={discovercard.img}
                      alt=''   />
                <div className=' text-black py-4'>
                      <h1 className='text-lg font-semibold'>{discovercard.title}</h1>
                      <p className='text-gray-500'>{discovercard.desc}</p>
                </div>
                <a 
                  className='text-lg font-bold hover:text-blue-900 cursor-pointer'
                  href={discovercard.href} >
                  Enroll
                </a>
            </div>
         ))}   
      </div>

      </div>
      <Footer />
    </>
  )
}

export default Students
