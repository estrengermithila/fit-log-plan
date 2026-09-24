import logo from '@/assets/logo.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='flex justify-between bg-[#15171d]'>
            <div className='flex gap-3'>
                <Image src={logo} alt='footer-fit-log'></Image>
            <h1 className='font-bold text-2xl'>FITLOG</h1>
            </div>
            <div>
                <p className='font-semibold'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;