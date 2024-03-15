import { BackEndModel } from '../../model/BackEndModel';
import Footer from '../../components/footer/Footer';


const cards: BackEndModel[] = [
    { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702878257/Back-End%20Mastery/howitworks_img/1_lt8mmg.png'},
    { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702878263/Back-End%20Mastery/howitworks_img/2_hjvbnm.png'} ,
    { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702878267/Back-End%20Mastery/howitworks_img/3_kg8rtc.png'},
    { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702878272/Back-End%20Mastery/howitworks_img/4_ltk5d6.png'},
    { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702878276/Back-End%20Mastery/howitworks_img/5_foo63v.png'}  
]



const BackendExplained = () => {
    

  return (
    <>
    <div className="bg-white">
       

      <div className='mt-40 px-16'>
        <div className='text-center flex flex-col justify-center items-center content-center'>
            <h1 className='text-4xl font-bold'>What is Back-End Development</h1>
            <p className='text-xl text-gray-600 mt-5'>Watch this short video to learn the basics of backend. At the end of the video, you'll learn what type of work backend developers do, and why they are so crucial in everything we do in the web.</p>
            <div className="mt-10 border  h-auto p-20 ">
                aksjhdfkj
            </div>

            <div className='p-5 bg-blue-600 mt-10 rounded-lg text-white'>
                <button>Apply for the Program</button>
            </div>    
        </div>
      </div>

      <div className=' mt-20'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-xl lg:text-4xl font-semibold text-gray-600 mb-10'>Here's a comparison between front-end and back-end development</h1>
                {cards.map((card) => (
                <div 
                    className="container w-full h-auto"
                    key={card.img}>
                    <img 
                        src={card.img} 
                        alt='img'
                        className='rounded-md'/>
                </div>
                ))}
            </div>        
      </div>
       <div className='mt-10 bg-gray-300 p-10'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-xl lg:text-4xl'>Want to learn more about Back-End Development?</h1>
                <div className='bg-blue-600 p-5 text-white rounded-lg mt-10'>
                    <button>Apply for the Program</button>
                </div>
            </div>        
       </div> 

        <Footer />            
</div>

                  
    </>
  )
}

export default BackendExplained
