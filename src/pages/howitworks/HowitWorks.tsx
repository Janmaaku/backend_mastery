import { HowItWorks } from '../../model/HowItWorks';
import MonthlyCard from './MonthlyCards';


// how it works array
const cards: HowItWorks[] = [
    { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702829445/Back-End%20Mastery/howitworks_img/person2_aark6a.png', title: 'Best Decision of My Life', desc: '"I am an employed back-end dev and I love the challenges that it brings me. I wouldnt be in this position if not for Back-End Mastery! Thank you! "', name: 'Quelbz F.' },
    { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702829444/Back-End%20Mastery/howitworks_img/person1_dh7dxo.png', title: 'Just Got Hired!', desc: '"I am an employed back-end dev and I love the challenges that it brings me. I wouldnt be in this position if not for Back-End Mastery! Thank you! "', name: 'Karen D.' },
    { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702829447/Back-End%20Mastery/howitworks_img/person3_k4depd.png', title: 'Support Was Unbelievable', desc: '"I am an employed back-end dev and I love the challenges that it brings me. I wouldnt be in this position if not for Back-End Mastery! Thank you! "', name: 'Janm R.' }
]


const HowitWorks = () => {

     
   
    
  return (
    <>
    

        <div className='mt-32 items-center justify-center content-center container mx-auto'>
            <div className='text-xl font-bold text-center'>
                <h1>Here's How to Join Back-End Mastery</h1>
            </div>
            <div className='flex mt-10 gap-5 flex-col px-5 lg:flex-row'>        
                <div className='pr-5 flex flex-col gap-5'>
                    <h6 className='font-semibold'>1️⃣ Complete the <a href="/apply" className='underline text-blue-500 underline-offset-2 '>Application Form</a></h6>
                    <p>Schedule a consultiation call to find out if this program is for you.</p>
                    <h6 className='font-semibold'>2️⃣ Study the materials at your own pace</h6>
                    <p>Most students complete the program within 6 months by studying an average of 2 hours per day</p>
                    <h6 className='font-semibold'>3️⃣ Ask for help</h6>
                    <p>We have a thriving discord community where you can ask questions whenever you're stuck with a problem. You also get bi-weekly 30 minute 1 on 1 sessions with our coaches as part of your enrollment.</p>
                </div>
                <div className='w-full h-auto rounded-md'>
                    <img src='https://res.cloudinary.com/doehyebmw/image/upload/v1702828724/Back-End%20Mastery/howitworks_img/howitworks_img1_oml6h9.jpg' alt='works' />
                </div>
            </div>          
        </div> 

        {/* What students are saying */}
        <div className='bg-green-700 p-8 mt-32'>
             <h1 className='text-center text-2xl lg:text-4xl  text-white font-bold mb-10'>What Students Are Saying</h1>
            <div className='flex gap-8 flex-col lg:flex-row'>
              
            {cards.map((card) => (
            <div 
                key={card.img}
                className='border p-12 h-auto  w-auto flex flex-col justify-center items-center rounded-lg shadow-xl bg-white'
            >
                <div className='w-40 items-center '>
                <img src={card.img} alt='cards' className='max-w-full h-auto rounded-full border'/>
                </div>
                <div className='mt-4 '>
                    <h1 className='text-center font-bold'>{card.title}</h1>
                </div>
                <p className='mt-4'>{card.desc}</p>
                <span className='text-center text-gray-600'>- {card.name}</span>    
            </div>
            ))}
        </div>
        </div>
        {/* End of what students are saying */}
   
         <MonthlyCard />       
    </>
  )
}

export default HowitWorks
