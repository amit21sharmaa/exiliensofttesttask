import { Box, Card, Typography } from "@mui/material";
import DesignedButton from "../common/DesignedButton";
import picturePath from '../assests/BuildingBrands.jpg';
import clickup from '../assests/clickup.png';
import dropbox from '../assests/dropbox.png';
import github from '../assests/github.png';
import '../components/BuildingBrand.css';

const BuildingBrand = () => {
    return(
        <div className="buildingBrand">
            <Box sx={{display:'flex', flexDirection:'row',gap:3, ml:13, mt:5}}>
                <Box sx={{color:'black', width:'40%'}}>
                    <Typography variant="h3" sx={{mb:3}}>
                        Building Brands in the <span style={{color:"#6153CD"}}>Digital Age</span> 
                    </Typography>
                    <Typography sx={{color:"#47536B",mb:3}} >
                        Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights. 
                    </Typography>
                    <DesignedButton buttonName="Learn More" />
                </Box>
                <Box sx={{width:'40%', ml:3}}>
                    <img src={picturePath} alt="BuildingBrands" width='500px' style={{borderRadius:'50px'}} />
                    <Card elevation={2} sx={{backgroundColor:'white', margin:'-3% 0% 0% 33%',pl:1, width: '90px',borderRadius: '7px', position:'absolute'}}>
                        ⭐ Projects<br/> <strong> 600+</strong> Done
                    </Card>
                </Box>
            </Box>
            <Box sx={{display:'block',textAlign:'center',mt:5, fontSize:'10px'}}>
                <Typography >
                    Powering next-gen companies
                </Typography>
                <Box sx={{display:'flex', flexDirection:'row',justifyContent: 'center'}}>
                    <img src={clickup} alt="clickup" width='200px' style={{}} />
                    <img src={dropbox} alt="dropbox" width='200px' style={{}} />
                    <img src={github} alt="github" width='200px' style={{}} />
                </Box>
            </Box>
        </div>
    )
}

export default BuildingBrand;