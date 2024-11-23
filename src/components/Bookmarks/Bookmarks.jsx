import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

function Bookmarks({bookmarks}) {
  return (

        <div className="w-1/3 bg-[#1111110D] ml-6 rounded-xl mt-10">
            <h1 className="text-2xl font-bold body text-center pt-8">Bookmarked Blogs: {bookmarks.length} </h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>

  );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;























