import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <a href="/" className="absolute top-4 left-4 text-blue-500 cursor-pointer">Go back home</a>
      <div className=" inset-0 flex items-center flex-col justify-center">
        <img
          src="https://res.cloudinary.com/doehyebmw/image/upload/v1703329421/Back-End%20Mastery/404_img/undraw_page_not_found_re_e9o6_p5fap6.svg"
          alt="404"
          className="h-96 w-full "
        />
        <h1 className='mt-10 text-9xl font-bold'>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;