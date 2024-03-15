import { Box } from '@mui/material';
import Header from './components/Header';
import BuildingBrand from './components/BuildingBrands';
import ExploreServices from './components/ExploreServices';
import Director from './components/Director';
import OurBlog from './components/OurBlog';
import Footer from './components/Footer';

const MainPage = () => {
  return (
    <div className='mainpage'>
      {/* <Header /> */}
      <Box sx={{ pt:9  }}>
        <BuildingBrand />
        <ExploreServices />
        <Director />
        <OurBlog />
        <Footer />
      </Box>
    </div>
  );
}

export default MainPage;