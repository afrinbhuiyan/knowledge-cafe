import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";
import './Blog.css'
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // console.log(blog)
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='blog-container  space-y-4'>
            <img className='iamge' src={cover} alt={`cover picture of the title ${title} `} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 mt-5'>
                   <img style={{borderRadius: "50px"}} src={author_img} alt="" />
                   <div>
                    <h3 className='text-[16px] font-semibold' > {author} </h3>
                    <p className='text-[#11111199]'> {posted_date} </p>
                   </div>
                </div>
                <div>
                    <span> {reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2' ><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mt-5'> {title} </h2>
            <p className='mt-5 text-[#11111199]'>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href="">{hash} </a></span> )
                }
            </p>
            <button
            onClick={() => handleMarkAsRead(id, reading_time)}
            className='text-[#6047EC] font-semibold underline' 
            >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.object.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;