import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

function Form() {
  const [toSend, setToSend] = useState({
    from_name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      service_cggiti5,
      template_1cml9lb,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
<div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' name='from_name' type="text" placeholder='Name'     value={toSend.from_name} onChange={handleChange}/>
                <input className='border shadow-lg p-3' name='email' type="email" placeholder='Email'     value={toSend.email} onChange={handleChange}/>
            </div>
            <input className='border shadow-lg p-3 w-full my-2' name='subject' type="text" placeholder='Subject' value={toSend.subject} onChange={handleChange}/>
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" name='message' placeholder='Message' value={toSend.message} onChange={handleChange}></textarea>
            <button type='submit' className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  );
}

export default Form