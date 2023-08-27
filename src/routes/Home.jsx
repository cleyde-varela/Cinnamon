import { useNavigate } from 'react-router-dom';
import BannerImage from "../assets/home-image.png";

const Home = () => {

  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate('search');
  };

  return (
    <div className="home-container">
      <div className="home-image-section">
        <img src={BannerImage} alt="banner" className="home-img"></img>
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
          Plan Your Meals With Ease.
        </h1>
        <p className="primary-text">
        A unique online planner that you can easily manage with tons of free healthy and delicious recipes.
        </p>
        <button className='secondary-button' onClick={navigateToSearch}>Start Now</button>
      </div>
    </div>
  );
};

export default Home;
