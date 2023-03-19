import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = ({ id, description, title, image, likedCourses, setLikedCourses }) => {

    const wishlistHandler = () => {
        if (likedCourses.includes(id)) {
            // already course is added in wishlist then remove it from wishlist
            setLikedCourses((prev) => prev.filter((cid) => cid !== id));
            toast.warning("Removed from wishlist");
        } else {
            // course not added in wishlist then add to wishlist
            setLikedCourses([...likedCourses, id]);
            toast.success("Added to wishlist")
        }
    }

    return (
        <div className='w-[300px] bg-[rgba(34,34,59,0.8)] rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={image.url} alt={image.alt} />

                <div>
                    <button
                        onClick={wishlistHandler}
                        className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center absolute right-2 bottom-[-12px]'>
                        {
                            likedCourses.includes(id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{title}</p>
                <p className='mt-2 text-white'>
                    {
                        description.length > 100 ? `${description.substring(0, 100)}...` : description
                    }
                </p>
            </div>
        </div>
    )
}

export default Card