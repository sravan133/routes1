const express=require("express")

const parsebody=require("body-parser")

const app=express()

const adminRoutes=require("./routes/admin")

const shopRoutes=require("./routes/shop")

app.use(parsebody.urlencoded({extended:false}))


app.use(adminRoutes)
app.use(shopRoutes)

app.use((req,res)=>{
    res.status(404).send(`<h1> Page Not Found`)
})

app.listen(2000,()=>{
    console.log("server is listening at port 2000!")
})


//------------------------------------------------------------------------------

// admin.js (file)
 
const express=require("express")

const router=express.Router()

router.get("/add-product",(req,res,next)=>{
    res.send(`<html>
                    <form method='POST'>
                            <label>PRODUCT NAME</label>
                            <input type="text" name="PRODUCT">
                            </br>
                            <label>PRODUCT SIZE</label>
                            <input type="text" name="PRODUCT">
                            </br>
                            <button type="submit">ADD PRODUCT</button>
                    </form>
              </html
    `)
})

router.post("/add-product",(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})

module.exports=router

//--------------------------------------------------------------------------------------

//shop.js (file)

const express=require("express")

const router=express.Router()

router.get("/",(re,res,next)=>{
    res.send(`<h1> This Is Home Page </h1>`)
})

module.exports=router