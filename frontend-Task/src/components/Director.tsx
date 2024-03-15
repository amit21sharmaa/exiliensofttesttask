import { Box, Typography } from "@mui/material";
import director from '../assests/director.png';
import leftArrow from '../assests/left-arrow.png';
import '../components/BuildingBrand.css';
import rightArrow from '../assests/right-arrow.png';

const Director = () => {
    return(
        <div className="buildingBrand">
            <Box sx={{display:'flex', flexDirection:'row',gap:3, ml:13, mt:5,mb:5}}>
                <Box sx={{width:'40%', ml:3}}>
                    <img src={director} alt="BuildingBrands" width='300px' style={{height:'360px'}} />
                </Box>
                <Box sx={{color:'black', width:'40%'}}>
                    <Typography sx={{color:"#47536B",mb:3, fontSize:'16px'}} >
                        “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”
                    </Typography>
                    <Typography sx={{color:"#47536B",mb:3, fontSize:'12px'}} >
                        <strong>David Calathan</strong> - Director of Design Operations, New York
                    </Typography>
                    <Typography sx={{float:'right',pt:'40%'}}>
                        <img src={leftArrow} alt="leftArrow" width='20px' style={{marginRight:'5px'}} />
                        <img src={rightArrow} alt="rightArrow" width='20px' style={{marginLeft:'5px'}} />
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Director;