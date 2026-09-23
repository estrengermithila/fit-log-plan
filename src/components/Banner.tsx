import bannerImage from '@/assets/banner.png'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='mt-10 mb-20'>
            <div className="hero bg-base-200 min-h-screen rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
      alt="banner-image-fitLog"
      src={bannerImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
        <p className='text-[#c2f800] font-bold'>WORKOUT LIBRARY</p>
      <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
      <p className="py-6">
       FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
      <button className="btn bg-[#c2f800] rounded-xl text-black">BROWSE WORKOUTS</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;