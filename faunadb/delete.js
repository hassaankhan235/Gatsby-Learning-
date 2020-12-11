const faunadb = require('faunadb'),
q = faunadb.query;

(async () => {
    const client = new faunadb.Client({secret: 'fnAD8k-3RiACB8K1iVEw5OgNm-JRLgWZHOuYAd7v'})
    
    try{
        const res = await client.query(
            q.Delete(
                q.Ref(q.Collection('posts'), '284561364268089863')
            )
        )
        console.log('Result', res)
    }
    catch(err){
        console.log("ERROR",err)
    }
})()