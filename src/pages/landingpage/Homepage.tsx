import { PartnersModel } from '../../model/PartnersModel';
import { motion } from 'framer-motion'
import { DiscoverModel } from '../../model/DiscoverModel';
import { Testimonies } from '../../model/TestimoniesMode';
import Accordion from './Accordion';
import Footer from '../../components/footer/Footer';


//Our partners img array
const partners: PartnersModel[] = [
  { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702524550/Back-End%20Mastery/partners_img/twitch_k7ik2u.png', href: '#/'},
  { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702524482/Back-End%20Mastery/partners_img/google-logo-icon-png-transparent-background-osteopathy-16_xz9nkv.png', href: '#/'},
  { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702524506/Back-End%20Mastery/partners_img/109012-shopee-logo-download-free-image_yeggoo.png', href: '#/'},
  { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702525044/Back-End%20Mastery/partners_img/github_uv3jvu.png', href: '#/'},
  { img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702524490/Back-End%20Mastery/partners_img/Lazada-Symbol_tmp1zg.png', href: '#/'}
]
//Discover Backend array
const discovercards: DiscoverModel[] = [
  { id: 1, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531465/Back-End%20Mastery/backend_cards/1b_tmxo6s.png', title: 'Course 1', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 2, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531479/Back-End%20Mastery/backend_cards/2b_cmyopp.png', title: 'Course 2', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 3, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531487/Back-End%20Mastery/backend_cards/3b_yeyuqa.png', title: 'Course 3', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 4, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531495/Back-End%20Mastery/backend_cards/4b_whfydb.png', title: 'Course 4', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 5, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531501/Back-End%20Mastery/backend_cards/5b_cspggj.png', title: 'Course 5', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
  { id: 6, img: 'https://res.cloudinary.com/doehyebmw/image/upload/v1702531506/Back-End%20Mastery/backend_cards/6b_ca2pqh.png', title: 'Course 6', desc: 'You’ll be introduced to the core web development technologies like HTML and CSS.', href: '#/'},
]
//Testimonies array
const testimonials: Testimonies[] = [
  { author:{  name: 'Bucky James', handle: '@buckyjames', imgUrl:'https://res.cloudinary.com/doehyebmw/image/upload/v1702535272/Back-End%20Mastery/testimonies_img/testimonial1_ygrdgl.png'}, desc: 'Learning back-end programming can be daunting. Fortunately, BackEnd Mastery has amazing instructors. The #1 thing I got from it is how to think like a developer which is missing from most bootcamps and coding courses.'},
  { author:{  name: 'Natasha Romanoff', handle: '@natasharomanoff', imgUrl:'https://res.cloudinary.com/doehyebmw/image/upload/v1702535426/Back-End%20Mastery/testimonies_img/testimonial2_pzciel.png'}, desc: "It wasn't easy and I got tested over and over again, but I eventually got a job 2 months after my graduation. Thank you Back End Mastery!"},
  { author:{  name: 'Jasmine Anora', handle: '@jasmineanora', imgUrl:'https://res.cloudinary.com/doehyebmw/image/upload/v1702535545/Back-End%20Mastery/testimonies_img/testimonial3_kpds2t.png'}, desc: "It wasn't easy and I got tested over and over again, but I eventually got a job 2 months after my graduation. Thank you Back End Mastery!"},
  { author:{  name: 'Jasmine Anoasdfra123', handle: '@jasmineanora123', imgUrl:'https://res.cloudinary.com/doehyebmw/image/upload/v1702535545/Back-End%20Mastery/testimonies_img/testimonial3_kpds2t.png'}, desc: "It wasn't easy and I got tested over and over again, but I eventually got a job 2 months after my graduation. Thank you Back End Mastery!"},
  { author:{  name: 'Jasmine Ano12ra4312', handle: '@jasmineasanora4312', imgUrl:'https://res.cloudinary.com/doehyebmw/image/upload/v1702535545/Back-End%20Mastery/testimonies_img/testimonial3_kpds2t.png'}, desc: "It wasn't easy and I got tested over and over again, but I eventually got a job 2 months after my graduation. Thank you Back End Mastery!"},{ author:{  name: 'Jasmine Anora', handle: '@jasmineanora', imgUrl:'https://res.cloudinary.com/doehyebmw/image/upload/v1702535545/Back-End%20Mastery/testimonies_img/testimonial3_kpds2t.png'}, desc: "It wasn't easy and I got tested over and over again, but I eventually got a job 2 months after my graduation. Thank you Back End Mastery!"}
  
]
//Accordion array


export default function Home() {
  

  

  return (
    <div className="bg-white">
    

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-40">
          <motion.div className="text-center"
            initial={{ opacity: 0 }}
            animate= {{ opacity: 20 }}
            transition={{ delay: 1.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              We Help People Start a Back-End Developer Career
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Master the fundamentals of backend programming. Create "job-worthy" projects, and get hired as a top-tier developer
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:text-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check Corriculum
              </a>
              <a href="#/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-500">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
              <hr className='h1 my-8'></hr>
              <p className='text-lg font-semibold'>Our Partners</p>
              <div className='flex gap-10 my-10 cursor-pointer justify-center'>
                {partners.map((partner) => (
                  <a 
                    className=''
                    key={partner.img}
                    href={partner.href}>
                    <img
                        className='rounded-lg w-16 h-16' 
                        src={partner.img} alt=""/>
                  </a>
                  ))}
              </div>
          </motion.div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80ffac] to-[#89f0fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      
      </div>
            {/* Why choose Back End Master */}
      <div className='text-black text-center bg-gray-200 py-10 px-10 md:px-16 lg:px-40 xl:px-60'>
              <h4 className='font-bold text-2xl'>Why Choose Back-End Mastery?</h4>
          <div className='mt-10 gap-5 flex flex-col'>
                <h6 className='text-lg font-semibold'>⌛ Self-Paced But Fully Supported</h6>
              <p>You get access to our discord with other members and coaches with real-world experience. Got a question? Just head over to our discord channel and get solutions to your problems.</p>
                <h6 className='text-lg font-semibold'>🌐 World Class Instructors</h6>
              <p >Our instructors are the best in the business with a combine experience of 40 years across 5 different industries.</p>
                <h6 className='text-lg font-semibold'>💵 Job Hunting Assistance</h6>
              <p >We help you get a job by teaching you interview skills most programmers lack.</p>
                <h6 className='text-lg font-semibold'>💰 Money Back Guarantee</h6>
              <p >We offer a 30-day money back guarantee. If at anytime within 30 days of enrollment, you think it's not the best back-end program in the market, then email support and we'll give your money back - no questions asked!</p>  
                <h6 className='text-lg font-semibold'>🔑 Success Stories</h6>
              <p className=''>We have hundreds of former students now working as back-end dev across different industries!</p>  
          </div>
          <button className=' mt-9 py-3 px-7 rounded-xl bg-indigo-600 text-white'>
              <a href='#/'>How It Works</a>
          </button>    
      </div> 

          {/* Discover Back-End!     */}
          <h1 className='text-5xl text-center font-bold mt-10'>Discover Back-End!</h1>
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
            </div>
         ))}   
      </div>
           {/*end  Discover Back-End!     */} 
          {/* Testimoniess */}
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have teach with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.desc}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imgUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
          {/* end Testimoniess */}
    <Accordion />
      
      <div className= 'w-auto  bg-green-600 text-center content-center flex flex-col justify-center items-center p-10 mx-20 mb-10 rounded-md'>
            <div className='text-xl md:text-2xl lg:text-4xl xl:text-5xl p-5 text-white font-semibold'>
                <h1>Let's put the pedal to the metal! Apply for a consultation call today!</h1>
            </div>  
            <div className='bg-white p-5 w-40 flex justify-center items-center text-center  mt-10 rounded-lg text-green-600 hover:text-black'>
                  <button>Let Me Join!</button>
            </div>
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  )
}
