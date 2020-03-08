import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    '& > * + *': {
      // marginTop: theme.spacing(2),
      margin: '5% auto !important'
    },
  },
}));

function Page404(props) {
  const classes = useStyles();
  const { location } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Alert severity="error">
          <AlertTitle>Oops...</AlertTitle>
          <h2>No match found for <code>{location.pathname}</code></h2>
        </Alert>
        <h3><Link to="/">Go back to Home</Link></h3>
      </div>
    </React.Fragment>
  );
}
export default Page404;
