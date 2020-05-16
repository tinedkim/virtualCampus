import React from "react"
import classNames from "classnames";
import HomeEvents from './HomeEvents';
import { makeStyles } from "@material-ui/core/styles";
import landingImage from "../../assets/images/home/graphic.png";
import styles from "../../assets/material-kit-assets/jss/material-kit-react/views/landingPage.js";
import Button from "./../material-kit-components/CustomButtons/Button.js";
import AddIcon from "@material-ui/icons/Add";
import {MetaData, CustomTheme, CustomHeader} from "./../../components"

const theme = CustomTheme;

const useStyles = makeStyles(styles);

const manualSt = makeStyles(() => ({
  toAll: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'min(4rem, 5.5vw)',
    fontSize: 'min(3.8rem, 4vw)',
    color:'#0072CE',
  },
  toAllSubHeading: {
    fontSize: 'min(1rem, 1.4vw)',
    maxWidth: '58%',
    marginTop: "min(.7rem, 1.3vw)",
    marginBottom: "min(1.5rem, 2vw)",
    lineHeight: 'min(1.4rem, 1.9vw)',
    color:'#000000',
  },
  toAllSubHeadingModified: {
    fontSize: 'min(1.5em, 1.7vw)',
    marginTop: ".75rem",
    marginBottom: "1.5rem",
    maxWidth: 'min(60rem, 72vw)',
    lineHeight: "min(2em, 2.1vw)",
    margin: "auto",
    color:'#000000',
  },
  toAllPrimary: {
    color: "#0072CE",
    fontSize: 'min(4rem, 4vw)',
    marginTop: '0px',
    marginBottom: '0px',
    position: 'relative',
  },
  toAllSecondary: {
    color: "#BFD8E9",
    marginBottom: '0px',
  },
  buttonSpan1:{
    marginLeft: '1vw',
    marginRight: '1vw',
    color: '#FB750D',
  },
  text:{
    margin: 0,
    float: 'left',
    marginLeft: 'min(10%, 20vw)',
    marginTop: "min(6%, 12vh)",
    textAlign: 'left',
  },
  landing: {
    background: `url(${landingImage})`,
    backgroundSize: 'max(min(70vw, 110vh), 250px) auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right max(100%, 50px)',
    height: "max(80vh, 25vw)",
    width: "100%",
  },
  buttonExplore:{
    background: "#FFFFFF",
    border: "1px solid #FB750D",
    boxSizing: "border-box",
    borderRadius: "10px",
  },

  // Move events section up a little
  eventsSection: {
    position:'relative',
    left:'0px',
    background:'transparent',
  },

}));


export default function HomeDesktop({height}) {
  const classes = useStyles();
  const manual = manualSt();

    return (
        <div style={{background: "white"}}>
          <MetaData title={'Columbia Virtual Campus'}/>
          <CustomHeader active={''} brand={''}></CustomHeader>
          <div className={classNames(manual.landing)} style={{}}>
            <div className={classNames(manual.text)}>
              <h1 className={classNames(manual.toAll, manual.toAllSecondary)}>
                Stay connected through
              </h1>
              <h1 className={manual.toAll, manual.toAllPrimary}>
                Columbia Virtual Campus
              </h1>
              <h1 className={classNames(manual.toAllSubHeading)}>
                Navigate Columbia and Barnard by keeping track of upcoming virtual events and online resources
              </h1>
              <Button color="vcColor" size="lg" className={classNames(manual.buttonExplore)}
                      href="/events"
              >
                <span className={classNames(manual.buttonSpan1)}> EXPLORE </span>
              </Button>
            </div>
          </div>

          <div className={classNames(classes.main, manual.eventsSection)} style={{textAlign: 'left'}}>
            <div className={classes.container} id="explore">
              <h1 style={{textAlign: "center"}}
                  className={manual.toAll}> Upcoming Events
              </h1>
              <div style={{textAlign: "center"}}>
                <h1 className={classNames(manual.toAllSubHeadingModified)}>
                  Do you or your club want to host your own event on Columbia Virtual Campus? Answer some short
                  questions to get started!
                </h1>
              </div>
              <div style={{textAlign: 'center'}}>
                <Button color="vcColor" size="lg" className={classNames(manual.buttonExplore)}
                        active={true} target={'_blank'} rel="noopener noreferrer"
                        href={'https://forms.gle/fzKvSZqkAVNN6cHY6'}>
                  <span className={classNames(manual.buttonSpan1)}>HOST A NEW EVENT</span>
                </Button>
                <div style={{marginBottom: "40px"}}/>
              </div>
              <HomeEvents/>
              <div style={{marginBottom: "100px"}}/>
            </div>
          </div>
        </div>
    )
};