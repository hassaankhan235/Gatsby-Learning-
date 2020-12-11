const faunadb = require('faunadb'),
q = faunadb.query;

(async () => {
    var client = new faunadb.Client({secret:'fnAD8k-3RiACB8K1iVEw5OgNm-JRLgWZHOuYAd7v'})
    try{
        // Update the document
        const res = await client.query(
            q.Update(
            q.Ref(q.Collection('posts'), '284561364268089863'),
            {data : {title: 'Title update Hassaan is still King of programmers'}}
            ))

        // Replace the document
        const res = await client.query(
            q.Replace(q.Ref(q.Collection('posts'), '284561364268089863'),
            {data: {name: 'I am the greatest programmer Hassaan'}})
        )
        console.log('Result', res)
    }
    catch(err){
        console.log("ERROR", err)
    }
})()