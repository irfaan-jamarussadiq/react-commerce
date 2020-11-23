import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import bed from "./images/bedroom.jpg";
import table from "./images/table.jpg";
import table2 from "./images/table2.jpg";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const product_names = [
  'Bed', 'Table', 'Sofa',
  'Wooden Chest', 'Table2', 'Sofa2',
  'Wooden Chest3', 'Table3', 'Sofa3'
];

function FormRow(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          {
            <div>
              <h3>{product_names[props.startNum]}</h3>
              <img src={props.img} style={{width: "60%"}}/>
            </div>
          }
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
            {
              <div>
                <h3>{product_names[props.startNum + 1]}</h3>
                <img src={props.img} style={{width: "60%"}}/>
              </div>
            }
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
            {
              <div>
                <h3>{product_names[props.startNum + 2]}</h3>
                <img src={props.img} style={{width: "60%"}} alt="bed"/>
              </div>
            }
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

const FullpageWrapper = () => (
  <ReactFullpage
    sectionsColor={["white", "white", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
            <div class="section active" id="section0">
                <div class="intro-container">
                    <h1 class="company">HomeCraft</h1>
                </div>
            </div>
            <div class="section active" id="section1">
            <div className="products">
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <FormRow startNum={0} img={bed}/>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                  <FormRow startNum={3} img={table}/>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                  <FormRow startNum={6} img={table2}/>
                </Grid>
              </Grid>
            </div>
            </div>
            <div class="section active" id="section2"></div>
        </div>
      );
    }}
  />
);

class Page extends React.Component {
    render() {
        return (
            <div className="Page">
                <FullpageWrapper />
            </div>
        );
    }
}

export default Page;