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

const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      username
      email
      id
      token
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
  const [password, setPassword] = useState('');

  return (
    <Mutation mutation={LOGIN_MUTATION}>
      {(loginUser, { loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
            <Card className={classes.root}>
                <CardActionArea>
                <form
                id="signinForm"
                className="text-center  p-4"
                onSubmit={e => {
                    e.preventDefault();
                    loginUser({ variables: { email, password } });
                }}
                >
                <p className="h4 mb-4 f-1">Sign In</p>
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
                <div>
                    <TextField label="Password" variant="outlined"
                        title="Password"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <CardActions>
                    <Button variant="contained" color="secondary" className="btn btn-block" type="submit">
                    Sign In
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