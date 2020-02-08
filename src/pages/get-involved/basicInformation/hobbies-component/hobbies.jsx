import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { FormControl, TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: theme.spacing(1)
  },
  textField: {
    width: "100%"
  }
}));

function HobbiesComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={1}>
        <FormControl noValidate autoComplete="off">
          <Grid item xs={12}>
            <TextareaAutosize
              className={classes.textField}
              aria-label="minimum height"
              rowsMin={3}
            />
          </Grid>
        </FormControl>
      </Grid>
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HobbiesComponent);
