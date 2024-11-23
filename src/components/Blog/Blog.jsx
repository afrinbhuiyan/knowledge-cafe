import PropTypes from 'prop-types';
import './Blog.css'
const Blog = ({blog}) => {
    // console.log(blog)
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;

    return (
        <div className='blog-container'>
            <img className='iamge' width={"600px"} src={cover} alt={`cover picture of the title ${title} `} />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                   <img style={{borderRadius: "50px"}} src={author_img} alt="" />
                   <div>
                    <h3 className='text-[16px] font-semibold' > {author} </h3>
                    <p> {posted_date} </p>
                   </div>
                </div>
                <div>
                    <span> {reading_time} min read </span>
                </div>
            </div>
            <h2 className='text-4xl'> {title} </h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href="">{hash} </a></span> )
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;