import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import FormikField from "../form-components/FormikField"

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  title: {
    fontSize: "20px",
    lineHeight: "30px",
    color: "#0072CE"
  }
}))

const Capacity = (props) => {
  const classes = useStyles()

  return (
    <div style={{ margin: "15px 0 0 0" }}>
      <div className={classNames(classes.root, classes.title)}>
        Capacity&nbsp;
      </div>
      <Grid container spacing={2}>
        <Grid item sm={3} xs={12}>
          <FormikField
            label="Attendant Cap"
            name= "Attendants"
            error={props.errorsAttendants}
            touch={props.touchedAttendants}
          />
        </Grid>
      </Grid >
    </div>
  )
}

export default Capacity