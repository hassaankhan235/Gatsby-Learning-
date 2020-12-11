const faunadb = require('faunadb'),
q = faunadb.query;

(
    async ()=> {
    const client = new faunadb.Client({secret: 'fnAD8k-3RiACB8K1iVEw5OgNm-JRLgWZHOuYAd7v'})
        try{
        var res = await client.query(
            q.CreateCollection({name: 'posts'})
        )
        .then((ret) => console.log('Container Created' + ret)) 
        }
        catch(err){
            console.log("ERROR", err)
        }
    })()