import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import emailjs from '@emailjs/browser';
import Footer from '../../components/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ApplyRadioModel } from '../../model/ApplyRadioModel';




const radios: ApplyRadioModel[] = [
  { id: 'Yes', title: 'I want to shift to a new career in tech!'},
  { id: 'No', title: 'I need it to help me build my tech startup'},
  { id: 'maybe', title: 'I want to up-skill and command a higher salary'},
]

interface FormValues {
  firstName: { value: string; hasContent: boolean };
  lastName: { value: string; hasContent: boolean };
  age: { value: string; hasContent: boolean };
  date: { value: string; hasContent: boolean };
  phoneNumber: { value: string; hasContent: boolean };
  email: { value: string; hasContent: boolean };
  education: { value: string; hasContent: boolean};
  purpose: { value: string; hasContent: boolean};
  message: { value: string; hasContent: boolean};
}



const Apply:React.FC = () => {
     const [ message, setMessage ] = useState('');
     const [formValues, setFormValues] = useState<FormValues>({
        firstName: { value: '', hasContent: false },
        lastName: { value: '', hasContent: false },
        age: { value: '', hasContent: false},
        date: { value: '', hasContent: false},
        phoneNumber: { value: '', hasContent: false },
        email: { value: '', hasContent: false },
        education: { value: '', hasContent: false},
        purpose: { value: '', hasContent: false},
        message: { value: '', hasContent: false},
      
  
     })
    const form = useRef<HTMLFormElement>(null);


    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const {id, value} = e.target;
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [id]: { value, hasContent: !!value},
      }));
      
    };
    // settings for toastify
    const notifysucess = () => { 
            toast.success('Email sent successfully:', {
              position: "top-right",
              autoClose: 3000,  // seconds before ma close ang toaster
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            };
    // settings for error toastify
     const notifyerror = () => { 
            toast.error('Failed send Email', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            };       
             // settings for warning toastify
     const notifywarning = () => { 
            toast.warning('Please fill in all fields before submitting.', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            };       
    


// Clear syntax after user click submit
  const clearForm = () => {
    setFormValues({ 
        firstName: { value: '', hasContent: false },
        lastName: { value: '', hasContent: false },
        age: { value: '', hasContent: false},
        date: { value: '', hasContent: false},
        phoneNumber: { value: '', hasContent: false },
        email: { value: '', hasContent: false },
        education: { value: '', hasContent: false},
        purpose: { value: '', hasContent: false},
        message: { value: '', hasContent: false}
    });
    setMessage('');
  }



 const isFormComplete = () => {
  
    for (const key in formValues) {
      if (!formValues[key as keyof typeof formValues].hasContent) {
        return false;
      }
    }
    return true;
  };

   // Get the selected radio button value
    

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    // Check if all fields are completed
    if (isFormComplete()) {
        const selectedPurpose = radios.find((radio) => radio.id === formValues.purpose.value);
       const purposeValue = selectedPurpose ? selectedPurpose.title : '';

    //   const emailData = {
    //   firstName: formValues.firstName.value,
    //   lastName: formValues.lastName.value,
    //   age: formValues.age.value,
    //   date: formValues.date.value,
    //   email: formValues.email.value,
    //   phoneNumber: formValues.phoneNumber.value,
    //   education: formValues.education.value,
    //   purpose: purposeValue,
    //   message: formValues.message.value,
    // };

      //emailjs logic for sending the form
      emailjs
        .send(
          'service_o7f6ia9', // Replace with your service ID
          'template_52zpwjs', // Replace with your template ID
           {
           
            firstName: formValues.firstName.value,
            lastName: formValues.lastName.value,
            age: formValues.age.value,
            date: formValues.date.value,
            email: formValues.email.value,
            phoneNumber: formValues.phoneNumber.value,
            education: formValues.education.value,
            purpose: purposeValue, // Update the purpose value here
            message: formValues.message.value,
           } ,
          'RcSEBGwp0wEWWsF3-' // Replace with your user ID
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
       
            notifysucess(); //Calling the notify function to trigger the toast
            clearForm();
          },
          (error) => {
            console.error('Email send error:', error.text);
            // Optionally, you can handle errors when sending the email
            notifyerror();
          }
        );
    } else {
      // If the form is not complete, handle it accordingly (e.g., show an error message)
      console.log('Please fill in all fields before submitting.');
        notifywarning();
    }



  };
const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { id} = e.target;
  setFormValues((prevFormValues) => ({
    ...prevFormValues,
    purpose: { value: id, hasContent: !!id },
  }));
};


     
  return (
    <>
       
                 <ToastContainer 
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"

                 /> 
      <div className='mt-40 '>
        <div className='text-center flex flex-col justify-center items-center content-center'>
            <h1 className='text-3xl font-bold'>Application Form</h1>
            <p className='text-xl text-gray-500 mt-5 px-16'>Complete the form and book a call with one of our experts fo find out if this program is right for you at this point of your development career.</p>
            <div className='mt-10'>
                <form className='text-start ' onSubmit={handleSubmit} ref={form}>
                  
                  <div className='flex justify-center items-center'>
                    {/* contact information */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:px-10'>
                    
                    <input
                          id='firstName'
                          type='text'
                          placeholder='First Name'
                          value={formValues.firstName.value}
                          onChange={handleInputChange}
                          className='p-3 border w-96 md:w-80 lg:w-[29rem]  border-gray-300 bg-transparent rounded-md shadow-md outline-green-700'
                    />
                      <p className='sr-only'>Entered Message: {message}</p>
                    <input 
                          id='lastName'
                          type='text'
                          placeholder='Last Name'
                          value={formValues.lastName.value}
                          onChange={handleInputChange} 
                          className='p-3 border border-gray-300 bg-transparent rounded-md shadow-md outline-green-700'
                    />
                    
                    <input
                          id='age' 
                          type='number'
                          placeholder='Age'
                          value={formValues.age.value}
                          onChange={handleInputChange} 
                          className='p-3 border  border-gray-300 bg-transparent rounded-md shadow-md outline-green-700'
                    />
                    
                     
                    <input 
                          id='date'
                          type='date'
                          value={formValues.date.value}
                          onChange={handleInputChange} 
                          className='p-3 border  border-gray-300 bg-transparent rounded-md shadow-md outline-green-700 text-gray-500'
                    />
                      
                    <input 
                          id='email'
                          type='email'
                          placeholder='Email Address:'
                          value={formValues.email.value}
                          onChange={handleInputChange} 
                          className='p-3 border  border-gray-300 bg-transparent rounded-md shadow-md outline-green-700'/>
                   
                    <input 
                          id='phoneNumber'
                          type='number'
                          placeholder='Mobile Number'
                          value={formValues.phoneNumber.value}
                          onChange={handleInputChange} 
                          className='p-3 border  border-gray-300 bg-transparent rounded-md shadow-md outline-green-700'/>
                  
                  </div>
                     {/* end of contact information  */}
                 </div>  
                    <div className='mt-5 px-10'>
                        <h1>Educational Attainment: </h1>
                        <div className=''>
                           <select 
                                  id='education'
                                  onChange={handleInputChange}
                                  value={formValues.education.value} 
                                  className='outline-none my-5 p-4 w-full border rounded-md cursor-pointer'>
                                 <option >Please Choose</option>
                                <option >4-5 Year Course Graduate</option>
                                <option >Senior Highschool Graduate</option> 
                                <option >Finished Masters/Doctorate</option> 
                            </select>
                        </div>
                        <div className='items-center'>
                           <h1>Why Do you Want to Learn Back-End Programming?</h1> 
                            <p>We'll be able to serve you better if we know your goals and main motivation for wantingg to join the program.</p>
                      
                          <div className='my-5 flex flex-col gap-4'>
                            {radios.map((radio) => (
                                  <div 
                                      className="flex items-center "
                                      key={radio.id}
                                  >
                                  <input
                                      type='radio'
                                      id={radio.id}
                                      value={radio.id}
                                      checked={formValues.purpose.value === radio.id}
                                      onChange={handleRadioChange}
                                      name='purpose'
                                      className='h-4 w-4 border-gray-300 text-blue-500 focus:ring-indigo-600'
                                    />
                                    <label htmlFor={radio.id} className='ml-2'>{radio.title}</label>
                                                        </div>
                                ))}
                          </div>
                      </div>
                    </div> 
                          <div className='mt-10 px-10'>
                             <h1>Complete the sentence and type your short answer below. I deserve to get accepted because:</h1>
                             <input 
                                   id='message'
                                   type='text'
                                   value={formValues.message.value}
                                   onChange={handleInputChange}
                                   className='border p-2 my-10 text-black rounded-md w-full outline-green-300' />
                             </div>    
                         
                          <div className='flex justify-center items-center'>
                              <button
                                type='submit'
                                className='py-3 px-5 bg-blue-600 flex justify-center content-center items-center mb-10 text-white cursor-pointer w-fit rounded-md'
                              >
                                Submit My Application Form
                              </button> 
                   
                          </div>
                </form> 

                <p className='mt-10'>Complete the application form, and we'll get back to you through email within 24 hours to set a schedule for the consulation call.  </p>  
            </div>
    
        </div>
      </div>
      <Footer /> 
    </>
  )
}

export default Apply


