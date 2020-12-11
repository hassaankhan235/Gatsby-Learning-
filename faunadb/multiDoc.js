const faunadb = require('faunadb'),
q = faunadb.query;

(async () => {
    var client = new faunadb.Client({secret:'fnAD8k-3RiACB8K1iVEw5OgNm-JRLgWZHOuYAd7v'})
    try{
        var res = await client.query(
            q.Map(
                [
                    'Hassaan is the greatest programmer of the age',
                    'Faundb will be his kingdom',
                ],
                q.Lambda(
                    'post_title',
                    q.Create(
                        q.Collection('posts'),{data: {title: q.Var('post_title')}}
                    )
                )
            )
        )
        console.log('Document created'+ res)
    }
    catch(err){
        console.log("ERROR", err)
    }
})()