import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-7xl mx-auto border-b'>
                  <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                  <img src={profile} alt="" />
        </header>
    );
};

export default Header;