const express=require('express');
const bodyParser=require('body-parser');
const request=require('request')
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());


app.post('/compiler',(req,res)=>{
    console.log("Hello");
    console.log(req.body);

    var program={
    script :req.body.code,
    language:req.body.lang,
    versionIndex: "0",
    clientId: "a2f3a28d8a2b606d6a11ca55d8647e62",
    clientSecret:"fe9b80513ee77ebe3d5c8e7f8016ff7cda25de0d29bec0726c3210a95af00da6"

    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
        function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            if (error == null) {
                var result = {
                    body: body,
                    status: "OK"
                }
                res.send(result);
            } else {
                var result = {
                    body: error,
                    status: "ERROR"
                }
                res.send(result);
            }

        });
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
//Sample req
// {
//     "code":"print('hello\\nworld')",
//     "lang":"python3"
//  }

//response structure
// error: null
// statusCode: 200
// body: {
//   output: 'hello\nworld\n',
//   statusCode: 200,
//   memory: '5300',
//   cpuTime: '0.02'
// }