import ga1 from '../../../assets/FeaturedBooksImages/ga1.png'
import ga2 from '../../../assets/FeaturedBooksImages/ga2.png'
import ga3 from '../../../assets/FeaturedBooksImages/ga3.png'
import ga4 from '../../../assets/FeaturedBooksImages/ga4.png'
import ga5 from '../../../assets/FeaturedBooksImages/ga5.png'
import ga7 from '../../../assets/FeaturedBooksImages/ga7.png'
import SelectsCard from './SelectsCaed'



const Galary = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        <SelectsCard bg={ga1} text='SILENT PATIENT' />
        <SelectsCard bg={ga2} text='THE CRAWDADS' />
        <SelectsCard bg={ga3} text='BOOKS' />
        <SelectsCard bg={ga4} text='BE COUNTED' />
        <SelectsCard bg={ga5} text='THE NIGHTINGALE' />
        <SelectsCard bg={ga7} text='GONE GIRL' />
        
            
        </div>
    );
};

export default Galary;