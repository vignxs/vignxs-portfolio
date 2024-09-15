import Grid from '@mui/material/Grid2';
import { Box, Typography, AppBar, Toolbar, Link, Card, CardContent, Stack, Fade } from "@mui/material";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CallMadeIcon from '@mui/icons-material/CallMade';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Home = () => {
  const [expanded, setExpanded] = useState(true);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const iconRef = useRef(null);

  useEffect(() => {
    // Icon animation
    gsap.to(iconRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "linear"
    });

   
  }, []);

  

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100vh", p: 2 }}>
      {/* AppBar */}  
      <AppBar
        position="static"
        color="primary"
        sx={{
          height: "75px",
          borderRadius: '20px',
          mb: 2,
        }}
      >
        <Toolbar sx={{ height: '100%', justifyContent: 'space-between' }}>
          <Typography color={"#000000"} variant="h6" component="div">
            Vignesh Sivakumar
          </Typography>
          <Box>
            <Link href="#" color="#000000" sx={{ mr: 2 }}>Home</Link>
            <Link href="#" color="#000000" sx={{ mr: 2 }}>About</Link>
            <Link href="#" color="#000000">Contact</Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Grid spacing={2} height={"100%"} width={{ xs: "100%", sm: "60%" }} sx={{ bgColor: "red" }} container size={16}>
          <Grid size={{ xs: 16, sm: 7, md: 3, lg: 8, xl: 8 }} >

            <Card 
              // ref={addToRefs}
              sx={{
                borderRadius: '20px',
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}>
              <CardContent sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <AcUnitIcon
                  ref={iconRef}
                  // color='secondary'
                  sx={{
                    fontSize: "100px",
                    color: "#A6D8F8",
                    position: 'absolute',
                    top: 16,
                    right: 16,
                  }}
                />
                <Box sx={{ mt: 'auto', mb:3 }}>
                  <Typography variant="h5">Python Developer Specializing in AI, AWS, Django Solutions.</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Item 2 */}
          <Grid size={{ xs: 12, sm: 5, md: 2, lg: 4, xl: 4 }}>
            <Card
              // ref={addToRefs}
              sx={{
                borderRadius: '20px',
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <CardContent sx={{ pb: "0 !important", p: 0, height: '100%', width: '100%' }}>
                <Box
                  component="img"
                  src="/Vignxs-profile.png"
                  alt="Vignesh Sivakumar"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>



          {/* Item 4 */}
          <Grid size={{ xs: 12, sm: 6, md: 5, lg: 6, xl: 6 }}>
            <Card
              // ref={addToRefs}
              sx={{
                borderRadius: '20px',
                height: 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}>
              <CardContent sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <AutoAwesomeIcon
                  color='secondary'
                  sx={{
                    fontSize: "30px",
                    position: 'absolute',
                    mt: 2, 
                    // top: 16,
                    // right: 16,
                  }}
                />
                <Box sx={{ mt: 'auto', mb: 2 }}>
                  <Typography variant="body1">Vignesh Sivakumar is a skilled Python Developer, known for integrating AI and cloud technologies to deliver optimized web and data solutions. Based in India, he creates impactful applications that enhance user experience and efficiency</Typography>
                </Box>
              </CardContent>
            </Card>

          </Grid>

          {/* Item 5 */}
          <Grid size={{ xs: 12, sm: 6, md: 5, lg: 6, xl: 6 }}>
            <Card
              sx={{
                borderRadius: '20px',
                bgcolor: "#A6D8F8",
                height: 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box width={"90%"} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2" sx={{mt: 2}}>
                    Have questions? <br /> I'd love to help!
                </Typography>
                  <CallMadeIcon sx={{ fontSize: "30px", mt: 2 }} /> 
                </Box>
                <Typography sx={{  mt: 10 }} fontWeight={"medium"} variant="h2" >Contact Me!</Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>


        <Grid spacing={2} height={"100%"} width={{ xs: "100%", sm: "40%" }} sx={{ bgColor: "red" }} container size={12}>
          {/* Item 3 */}

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Card
              sx={{
                borderRadius: '20px',
                height: 460,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}
            >
              <CardContent>
                <Accordion
                  expanded={expanded}
                  onChange={handleExpansion}
                  slots={{ transition: Fade as AccordionSlots['transition'] }}
                  slotProps={{ transition: { timeout: 400 } }}
                  sx={[
                    expanded
                      ? {
                        '& .MuiAccordion-region': {
                          height: 'auto',
                        },
                        '& .MuiAccordionDetails-root': {
                          display: 'block',
                        },
                      }
                      : {
                        '& .MuiAccordion-region': {
                          height: 0,
                        },
                        '& .MuiAccordionDetails-root': {
                          display: 'none',
                        },
                      },
                  ]}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography  fontSize={20} fontWeight={"medium"}>ThreeFacts</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <img
                      src="opener.png" // Replace with your image URL
                      alt="Descriptive text"
                      style={{ width: '399px', height: '269px', display: 'block', margin: 'auto' }} // Corrected image size with px units
                    />

                  </AccordionDetails>
                </Accordion>
                <Accordion
                 
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography fontSize={20} fontWeight={"medium"}>ThreeFacts</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
             
                 
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography fontSize={20} fontWeight={"medium"}>ThreeFacts</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
            
                 
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography fontSize={20} fontWeight={"medium"}>ThreeFacts</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </CardContent>
            </Card>
          </Grid>

          {/* Item 6 */}
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>

            <Card
              sx={{
                borderRadius: '20px',
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
                <Box width={"80%"} sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto'  }}>
                  <IconButton aria-label="Instagram" href="https://instagram.com/your_username" target="_blank">
                    <InstagramIcon  />
                  </IconButton>
                  <IconButton aria-label="Twitter"  href="https://twitter.com/your_username" target="_blank">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton aria-label="LinkedIn"  href="https://linkedin.com/in/your_profile" target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Stack>
    </Box>
  );
};
