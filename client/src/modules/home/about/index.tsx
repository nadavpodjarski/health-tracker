import React from 'react'
import { Box, makeStyles, Typography, Grid } from '@material-ui/core'
import ContactForm from './contact-form'

const useStyles = makeStyles((theme) => ({
   pWrapper: {
      margin: theme.spacing(3, 0),
      width: '100%'
   },
   pTitle: {
      fontWeight: 500
   },
   pContent: { fontSize: 14 },
   linkedinLink: {
      fontSize: 14,
      textDecoration: 'none',
      color: theme.palette.primary.main,
      padding: theme.spacing(0, 0.5)
   }
}))

const About = () => {
   const classes = useStyles()
   return (
      <Grid container style={{ textAlign: 'left', padding: '16px 0' }}>
         <Grid item xs={12} md={8}>
            <Box>
               <Typography variant="h5">Gut Microbiom/Flora</Typography>
               <Box className={classes.pWrapper}>
                  <Typography className={classes.pTitle}>Definition</Typography>
                  <Typography className={classes.pContent}>
                     The gut microbiome, as defined by molecular biologist
                     Joshua Lederberg, is the totality of microorganisms,
                     bacteria, viruses, protozoa, and fungi, and their
                     collective genetic material present in the gastrointestinal
                     tract
                  </Typography>
               </Box>
               <Box className={classes.pWrapper}>
                  <Typography className={classes.pTitle}>Job</Typography>
                  <Typography className={classes.pContent}>
                     The gut microbiome plays a very important role in your
                     health by helping control digestion and benefiting your
                     immune system and many other aspects of health. An
                     imbalance of unhealthy and healthy microbes in the
                     intestines may contribute to weight gain, high blood sugar,
                     high cholesterol and other disorders.
                  </Typography>
               </Box>
               <Box className={classes.pWrapper}>
                  <Typography className={classes.pTitle}>
                     Counclusion
                  </Typography>
                  <Typography className={classes.pContent}>
                     Our gut microbiom can be taken out of balance by various
                     ways mainly by food and stress, sleep quality and more,
                     Mitummy aims to provide you tools that mirrors you your
                     life routine and how it effects your gut microbiom, by food
                     intolerance tracking, stress state manager, and more.
                  </Typography>
               </Box>
               <Box margin="16px 0">
                  <Typography color="textSecondary">
                     Keep your gut microbiom in balance.
                  </Typography>
                  <Box display="inline-block">
                     <Typography component="span" style={{ fontSize: 14 }}>
                        Created by
                     </Typography>
                     <Typography
                        component="a"
                        href="https://linkedin.com/in/nadav-podjarski"
                        target="_blank"
                        className={classes.linkedinLink}
                     >
                        Nadav Podjarski
                     </Typography>
                  </Box>
               </Box>
            </Box>
         </Grid>
         <Grid item xs={12} md={4}>
            <ContactForm />
         </Grid>
      </Grid>
   )
}

export default About
