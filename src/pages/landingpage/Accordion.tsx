import React, { useState } from 'react';

interface AccordionProps {
    id: number;
    title: string;
    content: string;
}

const accordion: AccordionProps[] = [
  { id: 1, title: 'Is this course really 100% online? Do I need to attend any classes in person?', content: "Classes were recorded via screencast and students are expected to watch the video lessons and finish each course in their own pace. This is a 'self-taught' style program but the beauty of 'Backend Mastery' is you'll get assistance and support from the instructors and the community as long as you still have your membership"},
  { id: 2, title: 'How many months does it take to finish the program?', content: 'That will depend on how much time you can invest in the program. On average, past students finished all six courses within 4-6 months.'},
  { id: 3, title: 'What are the pre-requisites for enrolling in this program?', content: "No programming experience or knowledge needed. We start from scratch."}
]


const Accordion: React.FC<AccordionProps> = ({id, title, content}) => {
  const [ isOpen, setIsOpen ] = useState(false);


  
  return ( 
    <div className="border border-gray-200 ">

        <button
                className='flex justify-between items-center p-4 w-full text-left '
                onClick={() => setIsOpen(!isOpen)}
                key={id}
        >
        <span>{title}</span>
        <span
            className={`material-icons transform ${isOpen ? ' rotate-180' : ''}`}

        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
            </svg>

        </span>
        {isOpen && <div className=' border border-green-400'>{content}</div>}    
        </button>
    </div>
  );
};

const FAQ: React.FC = () => {
    return (
        <div className='max-w-screen-lg mx-auto p-8 bg-gray-300 rounded-lg mb-8'>
            <h1 className='text-3xl font-bold mb-8 text-center'>Frequently Asked Question</h1>
            {accordion.map((item) => (
            <Accordion 
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
            />
            ))}
        </div>
    )
}

export default FAQ;