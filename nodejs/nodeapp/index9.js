import jwt from 'jsonwebtoken';
import express from 'express';
const app= express();
app.use(express.json())
const secretkey = "helloiamaryan"
const user =[ {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password:"1234",
    role: "user"
},
{
    name: 'cathy',
    email: 'cathy@example.com',
    password:"1234",
    role: "admin"
}];

    const authenticate = (req, res, next) =>{
        try{
            let token = req.headers.authorization;
            token = token.split(" ")[1];
            const user = jwt.verify(token, secretkey);
            req.role = user.role
            req.role == "admin" ? res.status(200).json({message: "Welcome Admin"})
            : res.status(400).json({
                message: "You are not an admin"
            })
            next();
        }
        catch(e){
            res.status(401).json({message: "Invalid token"})
        }
    }

app.post("/login",(req, res)=>{
    const {email, password} = req.body;
    const found = user.find(user => user.email === email && user.password === password);
    if(found){
        const token = jwt.sign(found, secretkey,{expiresIn:'1h'})
        res.status(200).json({
            message: "login successful",
            token: token
        })
    }
    else{
        res.status(400).json({
            message: 'Invalid email or password'
        })
    }
})

app.get('/users',authenticate,(req,res)=>{
    res.json(user)
})



app.listen(8080,()=>{
    console.log("Server started on port 8080")
})