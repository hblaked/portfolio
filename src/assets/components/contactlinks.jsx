import React from "react"

export default function ContactLinks() {
  const [ result, setResult ] = React.useState('');

  const onSubmit = async (event) => {
    // event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', '732a81d9-cb4f-49d5-8d71-38e3e8d1545a');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.sucess) {
      setResult('Form submitted successfully!');
      console.log('Message sent.')
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>Contact form.</h1>

        <form className='flex-col w-full' onSubmit={onSubmit}>
          <div className='grid grid-cols-2 gap-3'>
            <input name='name' className='w-full p-1 pl-3 pr-3 border border-neutral-500 rounded-md' type='text' placeholder='Name' required />
            <input name='email' className='w-full p-1 pl-3 pr-3 border border-neutral-500 rounded-md' type='email' placeholder='Email' required />
          </div>
          <input name='subject' className='w-full p-1 pl-3 pr-3 mt-3 border border-neutral-500 rounded-md' type='text' placeholder='Subject' />
          <textarea name='message' className='w-full h-50 p-3 mt-3 border border-neutral-500 rounded-md' placeholder='Leave some feedback, career opportunities or just to say hi etc.' required />
          <button type='submit' className='cursor-pointer flex items-center justify-center w-full p-3 bg-neutral-100 hover:bg-neutral-300 text-neutral-900 rounded-md font-bold mt-5'>Send message <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg></button>
        </form>
        <span>{result}</span>
      </div>

      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>Contact links.</h1>

        <p><span className="font-bold font-serif">Email:</span> hayden@hblaked.dev</p>
      </div>

      {/* <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>Socials.</h1>

        <p><span className="font-bold font-serif">Email:</span> hayden@hblaked.dev</p>
      </div> */}
    </div>
  )
}
