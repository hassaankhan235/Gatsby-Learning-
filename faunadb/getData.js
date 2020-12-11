const faunadb = require('faunadb'),
q = faunadb.query;

(async () => {
    const client = new faunadb.Client({secret: 'fnAD8k-3RiACB8K1iVEw5OgNm-JRLgWZHOuYAd7v'})
    try{
        var res = await client.query(
            q.Get(q.Ref(q.Collection('posts'),'284561364268090887'))
        )
        console.log('Result retrieved'+" "+ res.data.title)
    }
    catch(err){
        console.log('Error', err)
    }
})()