import { Box, Card, Typography } from "@mui/material";
import '../components/OurBlog.css'
import DesignedButton from "../common/DesignedButton";
import realtimeAnalytics1 from "../assests/Realtime analytics1.png";
import realtimeAnalytics2 from "../assests/Realtime analytics2.jpg";
import realtimeAnalytics3 from "../assests/Realtime analytics3.jpg";

const blogPicturePathArray = [realtimeAnalytics1, realtimeAnalytics2, realtimeAnalytics3];

const OurBlog = () => {
    return (
    <div className="ourBlog">
        <Box sx={{display:'block',pt:5, fontSize:'10px', pl:3}}>
            <Typography variant="h5" sx={{padding: '0% 0% 2% 2%'}}>
                Our Blogs
            </Typography>
            <Box sx={{ textAlign:'center'}}>
                <Box sx={{display:'flex', flexDirection:'row',justifyContent: 'center',pb:'7%' }}>
                    {blogPicturePathArray.map((item,key) =>{
                        return(
                            <Box key={key} sx={{width:'40%', ml:3}}>
                                <img src={item} alt="realtimeAnalytics" width='300px' style={{height:'310px'}} />
                                <Card elevation={0} sx={{backgroundColor:'white', margin:'-7% 0% 0% 5%',position:'absolute',    width: '280px'}}>
                                    <Typography variant="h6"sx={{pt:1,pl:1, color:'#0F0049'}}>
                                        Realtime analytics
                                    </Typography>
                                    <Typography sx={{fontSize:'11px',pt:1,pl:1, color:'#0F0049'}}>
                                        “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. 
                                    </Typography>
                                </Card>
                            </Box>
                        )
                    })}
                </Box>
                <DesignedButton buttonName="Learn More" />
            </Box>
        </Box>
    </div>
  );
}

export default OurBlog;