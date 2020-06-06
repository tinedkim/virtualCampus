import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BLMCard } from "../../";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import GridItem from "../../material-kit-components/Grid/GridItem.js";
import GridContainer from "../../material-kit-components/Grid/GridContainer.js";

class TutorExpansionMapping extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: "",
    };

  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        {this.props.allTutors &&
        Object.keys(this.props.allTutors).map((ele, ind) => {
          if (ele && this.props.allTutors[ele] && this.props.allTutors[ele][0].website) {
            return (
              <div style={{display:'flex', flexDirection:'horizontal', justifyContent:'center'}}>
              <ExpansionPanel key={ind} expanded={this.state.expanded === "panel" + ind.toString()}
                              style={{ width: "100%" }}
                              onChange={() => {
                                this.setState({ expanded: this.state.expanded !== "panel" + ind.toString() ? "panel" + ind.toString() : "" });
                              }}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1bh-content"
                  id={"panel" + ind.toString() + "bh-header"}
                >
                  <span style={{fontSize:'22px'}}>{ele}</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ width: "100%" }}>
                  <GridContainer style={{ width: "100%" }}>
                    {this.props.allTutors[ele] && this.props.allTutors[ele].map((innerEle, innerInd) => {
                      if (innerEle && innerEle.website) {
                        return (
                          <GridItem key={innerInd} xs={12} sm={12} md={12} style={{margin:"1%"}}>
                            <BLMCard
                              website={innerEle.website}
                              title={innerEle.name}
                              description={innerEle.desc}
                              links={innerEle.profile}
                              resume={innerEle.resume}
                            />
                          </GridItem>
                        );
                      }
                    })}
                  </GridContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              </div>
            );
          }

        })
        }
      </div>
    );
  }
}

export default TutorExpansionMapping;
