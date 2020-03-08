var uuidv4 = require('uuid/v4');

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  addUser: ({id, name, email, created_at}) => {
    console.log('addUser called', name, email);
    id = uuidv4();
    const dt = new Date();
    created_at = dt.getTime()
    return {id, name, email, created_at}
  }
  // addUser: (id,
  //   name,
  //   email,
  //   created_at) => {
  //   return {
  //     id,
  //     name,
  //     email,
  //     created_at
  //   }
  // }
  // getCharacters: () => {
  //   characters {
  //     results {
  //       id
  //       name
  //       image
  //     }
  //   }
  // }
};
export default root;
