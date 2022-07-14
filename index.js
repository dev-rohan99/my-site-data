const app = require("./app");

let PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server is running on ${PORT} PORT...`);
    }
});


