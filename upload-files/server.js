const express = require('express')
const { response } = require('express')
const fileupload = require('express-fileupload')
const pdfparse = require('pdf-parse')
const app = express()

app.use("/", express.static("public"));

app.use(fileupload({}));

//upload pdf file
app.post("/extract-text", (req, res) =>{
    if (!req.files && !req.files.pdfFile0){
        res.status(400);
        res.end();
    }
    const myFiles = req.files
    console.log(myFiles);
    
    async function getText() {
        i = 0
        resultList = []
        for (file in req.files) {        
            key = 'pdfFile' + i
            await pdfparse(req.files[key]).then(result => {
                console.log(key + "++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                console.log(result.text);
                console.log(key + "++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                
            });
            i = i+1;
        }

    }

    getText();   
    
});

//service
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server ok! Acesse: http://localhost:${PORT}/`));
