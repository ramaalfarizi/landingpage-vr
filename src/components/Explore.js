import React from 'react';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
      <div className='container h-full mx-auto'>
        <div className='flex flex-col items-start justify-center h-full bg-no-repeat bg-cover bg-explore p-14'>
          <h3 className='mb-8 text-3xl font-semibold' data-aos='fade-right' data-aos-offset='1000'>Explore product in new way</h3>
          <p className='max-w-xs mb-12'  data-aos='fade-right' data-aos-offset='1100'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          {/* form */}
          <form className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0' data-aos='fade-up' data-aos-offset='200'>
            <input className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md' type='text' placeholder='Your email'/>
            <button className='btn'>Start</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
