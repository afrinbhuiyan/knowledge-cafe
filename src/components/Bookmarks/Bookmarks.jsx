import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

function Bookmarks({ bookmarks, readingTime }) {
    return (
        <div className="w-1/3 bg-[#1111110D] ml-6 rounded-xl mt-10">
            <div className='text-center bg-white py-5'>
                <h3 className="text-2xl font-bold text-[#6047EC] bg-[#1111110D] py-6 rounded-xl border border-[#6047EC] ">Spent time on read : {readingTime} min </h3>
            </div>
            <h1 className="text-2xl font-bold body text-center pt-8">Bookmarked Blogs: {bookmarks.length} </h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>

    );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;























