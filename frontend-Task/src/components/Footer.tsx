import { Box, Typography } from "@mui/material";
import twitter from "../assests/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import "../components/Footer.css";

const company = ['About', 'Features', 'Works', 'Career'];
const support = ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'];
const resources = ['Free eBooksl', 'How to - Blog'];

const Footer = () => {
    return(
        <div className="footer">
            <Box sx={{display:'flex', flexDirection:'column', width:'30%'}}>
                <Typography variant="h6" sx={{fontSize:'14px', pb:1}}>
                    Digital agency
                </Typography>
                <Typography sx={{fontSize:'11px', pb:1}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
                </Typography>
                <Typography sx={{display:'flex', flexDirection:'row'}}>
                    <img src="../assests/twitter.png" alt="twitter" width="100%"/>
                    <img src="../assets/facebook.png" alt="facebook" width="100%"/>
                    <img src="../assets/instagram.png" alt="instagram" width="100%"/>
                </Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', width:'15%'}}>
                <Typography variant="h6" sx={{fontSize:'14px', pb:1}}>
                    Company
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    {company.map((item, index) => {
                        return(
                            <Typography key={index} sx={{fontSize:'11px', pb:1}}>
                                {item}
                            </Typography>
                        )
                    })}
                </Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', width:'20%'}}>
                <Typography variant="h6" sx={{fontSize:'14px', pb:1}}>
                    Support
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    {support.map((item, index) => {
                        return(
                            <Typography key={index} sx={{fontSize:'11px', pb:1}}>
                                {item}
                            </Typography>
                        )
                    })}
                </Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', width:'15%'}}>
                <Typography variant="h6" sx={{fontSize:'14px', pb:1}}>
                    Resources
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    {resources.map((item, index) => {
                        return(
                            <Typography key={index} sx={{fontSize:'11px', pb:1}}>
                                {item}
                            </Typography>
                        )
                    })}
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    © 2023 Digital Agency. All rights reserved.
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    Powered by Amit
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    Design by Amit
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    Developed by Amit
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    UI/UX by Amit
                </Typography>
                <Typography sx={{fontSize:'11px'}}>
                    Web Design by Amit
                </Typography>
            </Box>

        </div>
    )
}

export default Footer;