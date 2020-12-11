const faunadb = require('faunadb'),
q = faunadb.query;

(async () => {
    const client = new faunadb.Client({secret: 'fnAD8k-3RiACB8K1iVEw5OgNm-JRLgWZHOuYAd7v'})

    try{
        // Create Index in Faunadb
        const res = await client.query(
            q.CreateIndex({
                name : 'postTitles',
                source: q.Collection('posts'),
                terms : [{field : ['data', 'title']}]
            })
        )
        console.log('Index Created' + res.name)

        
        // Search by Index 
        const res = await client.query(
            q.Get(q.Match(q.Index('postTitles'), 'Hassaan is the greatest programmer of the age'))
        )
        console.log('Result', res)
    }
    catch(error){
        console.log("Error",error)
    }
})()