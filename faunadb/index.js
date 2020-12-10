const faunadb = require('faunadb'),
q = faunadb.query;
// require('dotenv').config();

(async () => {
var admin = new faunadb.Client({secret: 'fnAD8qGmWHACB6ifDZ5PwPOinEhWp3DQvivZ5Rt-'})

try{
admin.query(
    q.Create(q.Collection('posts'), 
    {data : {title : 'Serverless'}})
).then((ret) => console.log(ret))
}
catch(err){
    console.log('Error',err)
}})()