import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const LIST_QUERY = gql`
  query viewUsers {
    name
  }
`;

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
// const useStyles = makeStyles({
//     root: {
//       maxWidth: 800,
//     },
//   });

export default function List() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  //const [password, setPassword] = useState('');

  return (
    <Query query={LIST_QUERY}>
      {(viewUsers, { loading, error, data }) => {
        if (loading) return 'Loading...';
        console.log('data : ', data)
        // if (error) return `Error! ${error.message}`;
        return (
            <Card className={classes.root}>
                <CardActionArea>
                { error && <Alert severity="error">{error.message}!</Alert> }
                { data && <div>Test</div> }
                </CardActionArea>
            </Card>
        );
      }}
    </Query>
  );
}
