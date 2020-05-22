import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../material-kit-components/Grid/GridContainer.js";
import GridItem from "../material-kit-components/Grid/GridItem.js";
import {TeamMember, Heading} from '../'
import styles from "../../assets/material-kit-assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import gitika from "../../assets/images/about-us/leads/gitika.jpg";
import tejit from "../../assets/images/about-us/leads/tejit.jpg";
import sharon from "../../assets/images/about-us/leads/sharon.jpg";
import archit from "../../assets/images/about-us/leads/archit.jpeg";
import karen from "../../assets/images/about-us/leads/karen.jpeg";
import lydia from "../../assets/images/about-us/leads/lydia.jpeg";
import canfer from "../../assets/images/about-us/leads/canfer.jpg";

import tamanna from "../../assets/images/about-us/TeamMembers/tamanna.jpeg";
import james from "../../assets/images/about-us/TeamMembers/james.jpg";
import claire from "../../assets/images/about-us/TeamMembers/claire.jpg";
import hariti from "../../assets/images/about-us/TeamMembers/hariti.jpeg";
import michelle from "../../assets/images/about-us/TeamMembers/michelle.jpg"
import caitlyn from "../../assets/images/about-us/TeamMembers/caitlyn.png";
import jacqueline from "../../assets/images/about-us/TeamMembers/jacqueline.jpg";
import hayun from "../../assets/images/about-us/TeamMembers/hayun.jpg";
import riya from "../../assets/images/about-us/TeamMembers/riya.jpg";
import ainur from "../../assets/images/about-us/TeamMembers/ainur.png";
import caroline from "../../assets/images/about-us/TeamMembers/caroline.jpg";
import brendan from "../../assets/images/about-us/TeamMembers/brendan.jpg";
import daniella from "../../assets/images/about-us/TeamMembers/daniella.jpeg";
import luiz from "../../assets/images/about-us/TeamMembers/luiz.jpeg";
import kevin from "../../assets/images/about-us/TeamMembers/kevin.jpg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}
         style={{marginTop:0, paddingTop: 0, paddingBottom: 0, marginBottom:0}}>
      <GridContainer className={classes.section}
                     style={{marginTop:0, paddingTop: 0, paddingBottom: 0, marginBottom:0, textAlign:'center'}}>
        <GridItem xs={12} sm={6} md={4}>
          <TeamMember position={'Co Founder'} name={'Gitika Bose'}
                      image={gitika}
                      description={'I am a junior in SEAS studying CS. I am currently working at the DSI at Columbia ' +
                      'in providing the FIST team at the IRI with data science solutions. This summer, ' +
                      'I am looking forward to my internship at Microsoft. I also likes to paint, ' +
                      'cook, and am currently obsessed with Black Clover (the anime).'}
                      facebook={"https://www.facebook.com/gitika.bose"}
                      github={"https://github.com/gitika-bose"}
                      linkedin={"https://www.linkedin.com/in/gitikabose/"}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <TeamMember position={'Co Founder'} name={'Tejit Pabari'}
                      image={tejit}
                      description={'I am a junior studying CS in the Intelligence System track. ' +
                      'My experience includes App-dev and Web-dev, along with a few AI/NLP projects.' +
                      'I am currently working at the INCITE lab, exploring Liberal Arts Education index through NLP.' +
                      'Apart from coding, I love watching Anime and TV Shows!'}
                      facebook={"https://www.facebook.com/Sharon.jin17"}
                      github={"https://github.com/sharonjin17"}
                      linkedin={"https://www.linkedin.com/in/sharon-jin-728b55152/"}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <TeamMember position={'Resources Lead'} name={'Sharon Jin'}
                      image={sharon}
                      description={'I’m a junior studying CS and Econ. I\'m a TPM at LionBase LLC, and worked ' +
                      'as a data analyst intern at Anchorage Capital hedge fund last summer. I love A:TLA, ' +
                      'HTTYD, and Black Clover, and am excited to be a summer software engineer intern at Facebook.'}
                      facebook={"https://www.facebook.com/tejit.pabari"}
                      github={"https://github.com/tejitpabari99"}
                      linkedin={"https://www.linkedin.com/in/tejitpabari/"}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <TeamMember position={'Study Spaces Lead'} name={'Archit Choudhury'}
                      image={archit}
                      description={'I am a Joint Degree student studying CS. I am currently a Software Engineer ' +
                      'at FluentUp. I previously worked at Siemens in the Smart City sector where I led intern ' +
                      'projects. I am also an avid soccer freak.'}
                      github={"https://github.com/architchoudhury"}
                      facebook={"https://www.facebook.com/architchoudhury"}
                      linkedin={"https://www.linkedin.com/in/architchoudhury/"}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <TeamMember position={'Design Lead'} name={'Karen Lin'}
                      image={karen}
                      description={'I\'m a Junior studying Computer Science and Visual Arts! My experiences include ' +
                      'participating in design challenges, redesigning brands, and creating new user experiences. ' +
                      'I\'m excited to be artistic director of CU Generation next fall and a product design intern ' +
                      'at MongoDB this summer.'}
                      facebook={"https://www.facebook.com/karen.lin.9847867"}
                      github={"https://github.com/linkaren"}
                      linkedin={"https://www.linkedin.com/in/klin123/"}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <TeamMember position={'Outreach Lead'} name={'Canfer Akbulut'}
                      image={canfer}
                      description={'I am a Junior in Columbia College ' +
                      'studying Psychology and Statistics. Currently, I work at two psychology labs focusing ' +
                      'on clinical, developmental, and social research. I recently purchased a Nintendo Switch a few ' +
                      'months ago and no one has been able to pry it out of my hands ever since.'}
                      facebook={"https://www.facebook.com/profile.php?id=100001279952259"}
                      linkedin={"https://www.linkedin.com/in/canfer-akbulut/"}
          />
        </GridItem>
        <GridItem xs={0} sm={0} md={4}>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <TeamMember position={'Faculty Advisor'} name={'Lydia Chilton'}
                      image={lydia}
                      description={'I\'m Lydia, I\'m faculty in CS and support CVC in any way I can. ' +
                      'Student-led activities are the most important part of college, and I\'m glad to see '+
                      'that continuing online.'}
                      github={"https://github.com/hmslydia"}
                      facebook={"https://www.facebook.com/hmslydia"}
                      linkedin={"https://www.linkedin.com/in/lydia-chilton-15495427/"}
          />
        </GridItem>
      </GridContainer>
      <div style={{minHeight: '80px'}}/>

      <Heading color={'blue'}>Events Team</Heading>
      <GridContainer className={classes.section}
                     style={{marginTop:0, paddingTop: 0, paddingBottom: 0, marginBottom:0, textAlign:'center'}}>
        <GridItem xs={0} sm={0} md={2}/>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'SEAS \'21'} name={'James Mastran'} image={james} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'Barnard \'20'} name={'Claire Adams'} image={claire} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'Barnard \'22'} name={'Hariti Patel'} image={hariti} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'CC \'21'} name={'Brendan Lim'} image={brendan} noDescription/>
        </GridItem>
      </GridContainer>

      <Heading color={'blue'}>Resources Team</Heading>
      <GridContainer className={classes.section}
                     style={{marginTop:0, paddingTop: 0, paddingBottom: 0, marginBottom:0, textAlign:'center'}}>
        <GridItem xs={0} sm={0} md={2}/>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'Barnard \'21'} name={'Tamanna Hussain'} image={tamanna} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'CC \'21'} name={'Michelle Lin'} image={michelle} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'CC \'21'} name={'Daniella Truong'} image={daniella} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'SEAS \'23'} name={'Luiz do Valle'} image={luiz} noDescription/>
        </GridItem>
      </GridContainer>

      <Heading color={'blue'}>Study Spaces Team</Heading>
      <GridContainer className={classes.section}
                     style={{marginTop:0, paddingTop: 0, paddingBottom: 0, marginBottom:0, textAlign:'center'}}>
        <GridItem xs={0} sm={0} md={1}/>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'SEAS \'22'} name={'Caitlyn Chen'} image={caitlyn} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'Barnard \'21'} name={'Riya Saha'} image={riya} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'GS \'22'} name={'Ainur Kaishibayeva'} image={ainur} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'Barnard \'21'} name={'Jacqueline Wang'} image={jacqueline} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'SEAS \'21'} name={'Kevin Mao'} image={kevin} noDescription/>
        </GridItem>
      </GridContainer>

      <Heading color={'blue'}>Design Team</Heading>
      <GridContainer className={classes.section}
                     style={{marginTop:0, paddingTop: 0, paddingBottom: 0, marginBottom:0, textAlign:'center'}}>
        <GridItem xs={0} sm={0} md={2}/>
        <GridItem xs={2} sm={3} md={2}/>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'Barnard \'22'} name={'Caroline Mao'} image={caroline} noDescription/>
        </GridItem>
        <GridItem xs={4} sm={3} md={2}>
          <TeamMember position={'SEAS \'21'} name={'Hayun Chong'} image={hayun} noDescription/>
        </GridItem>
      </GridContainer>
    </div>
  );
}