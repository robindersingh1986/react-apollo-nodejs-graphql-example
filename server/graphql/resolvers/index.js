import { v4 as uuidv4 } from 'uuid';
const globalObject = {};

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  getUsers: ({id}) => {
    if(id) {
      const value = globalObject[id] || {};
      return value ;
    }
    return { error: "No records"};
  },
  getAllUsers: () => {
    const allKeys = Object.keys(globalObject);
    const data = allKeys && allKeys.map( (item) => globalObject[item] )
    console.log(data, JSON.stringify(data));
    return data || [];
  },
  addUser: ({id, name, email, created_at}) => {
    console.log('addUser called', name, email);
    id = uuidv4();
    const dt = new Date();
    created_at = dt.getTime()
    const data = {id, name, email, created_at}
    globalObject[id] = data;
    console.log(id);
    return { id };
  }
};
export default root;
