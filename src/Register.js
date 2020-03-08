import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const REGISTER_MUTATION = gql`
  mutation addUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      name
      email
    }
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

export default function MutationWithRender() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  //const [password, setPassword] = useState('');

  return (
    <Mutation mutation={REGISTER_MUTATION}>
      {(addUser, { loading, error, data }) => {
        if (loading) return 'Loading...';
        // if (error) return `Error! ${error.message}`;
        return (
            <Card className={classes.root}>
                <CardActionArea>
                { error && <Alert severity="error">{error.message}!</Alert> }
                { data && <Alert severity="success">Data has been saved successfully!</Alert> }
                <form
                id="signinForm"
                className="text-center  p-4"
                onSubmit={e => {
                    e.preventDefault();
                    addUser({ variables: { name, email } });
                    // loginUser({ variables: { email, password } });
                }}
                >
                <p className="h4 mb-4 f-1">Register</p>
                <div>
                    <TextField label="Name" variant="outlined"
                    title="Name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    required
                />
                </div>
                <div>
                    <TextField label="Email" variant="outlined"
                    title="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    required
                />
                </div>
                <CardActions>
                    <Button variant="contained" color="secondary" className="btn btn-block" type="submit">
                      Register
                    </Button>

                </CardActions>
                </form>
                </CardActionArea>
            </Card>
        );
      }}
    </Mutation>
  );
}
