
import bannarV from '../../../assets/bannarV.mp4';

const Banner = () => {
  return (
    <div className='w-full h-screen relative'>
    <video
      className='w-full h-full object-cover'
      src={bannarV}
      autoPlay
      loop
      muted
    />
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
    <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Let me find your
                    <strong className="block font-extrabold">
                        Destination.
                    </strong>
                </h1>
      <h2 className='py-4 '>Guide 23 is a Travel Guide service provided by Sh Rongon.<br/> It is a one-stop solution for all your travel needs.<br/> You can find all the information you need about your destination, <br/>including hotels, restaurants, attractions, and more.</h2>
      
    </div>
  </div>
  );
};

export default Banner;
