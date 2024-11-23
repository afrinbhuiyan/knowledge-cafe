import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
      const {title} = bookmark;
    return (
        <div className='bg-[#ffff] p-7 mx-10 my-5 rounded-xl'>
            <h3 className='text-[20px]'> {title} </h3>     
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;