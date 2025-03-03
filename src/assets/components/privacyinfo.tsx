
export default function PrivacyInfo() {
  return (
    <div className='mobile-resize-privacy flex flex-col mt-15 gap-10'>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold font-serif text-5xl'>privacy policy.</h1>
        <p className='italic text-neutral-600'>last updated: March 2025</p>
      </div>
      
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>Welcome!</h1>
        <p className='text-neutral-300'>This <span className='font-bold'>Privacy Policy</span> is here to let you know how things operate here. This is my personal website I use to showcase my work, and coming from a privacy maniac I want to respect yours.</p>
      </div>
      
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>What information do I collect?</h1>
        <p className='text-neutral-300'>This is mainly a static portfolio site, so I don't actively collect any personal data. There's no accounts, cookie tracking, and no data gathering.</p>
        <h1 className='font-bold text-[1.2rem]'>1. What country/state you are visiting the site from</h1>
        <h1 className='font-bold text-[1.2rem]'>2. What type of device you are currently using</h1>
        <h1 className='font-bold text-[1.2rem]'>3. What operating system that device is using</h1>
      </div>
      
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>How will I use the info?</h1>
        <p className='text-neutral-300'>Here's what I might do with any information I collect:</p>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-5 text-neutral-300'>Make sure the site is opperating smoothly</li>
          <li className='list-disc ml-5 text-neutral-300'>Optimize certin features to suit the device most frequently visiting the site</li>
          <li className='list-disc ml-5 text-neutral-300'>Use data to make other projects suited to the device/operating system</li>
        </ul>
      </div>
      
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>Sharing your info</h1>
        <p className='text-neutral-300'>No info collected from this site will be used and or seen by anyone but me. If you have any data you would wish to have removed, feel free to contact me and I will remove it.</p>
      </div>
      
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>Security</h1>
        <p className='text-neutral-300'>I'll do everything in my power to keep all info safe, but let's be real—no system is foolproof. While I'll take reasonable steps to protect your info, I can't guarantee 100% security.</p>
      </div>
      
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>Policy updates</h1>
        <p className='text-neutral-300'>This policy is current as of <span className='font-bold'>March 2025</span>. If I make any changes, I'll update it here, so you're always in the loop. Feel free to check back occasionally, but don't worry—I'm not making any big changes without warning.</p>
      </div>
      
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold font-serif text-3xl'>Got questions?</h1>
        <p className='text-neutral-300'>If you have any questions, concerns, or just want to say hi, drop me an email at <span className='font-bold underline text-neutral-100'>hayden@hblaked.dev</span>. I'd love to hear from you!</p>
      </div>
    </div>
  )
}
