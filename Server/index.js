const express  = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyparser = require("body-parser");
const database = require("mysql");
const {application,request,response} = require("express");

const add = express();
add.use(cors());
add.use(fileUpload());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static("public"));

let a = database.createConnection({
    host:"localhost",
    user:"root",
    password:"Santhosh@12345",
    database:"userDetails"
});

a.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("db connected");
    }
})
add.post('/getuserinfo',(request,response) =>{
    console.log('getuserinfo');
    let {email,password}=request.body
    const sql = 'select * from user_det where email = ? and password = ?'
    a.query(sql,[email,password],(error,result) => {
        if(error){
            let s={"status":"error"};
            console.log(error);

        }else{
            let s={"status":"Success"};
            response.send(result);
        }
        
    })
})
add.get('/gettabledet',(request,response) =>{
    console.log('gettabledet');
    
    a.query('select id, industry_name, industry_code, status, effective_from, effective_to, created_by, created_on, modified_by, modified_on from industries where status = "A"',
  (error,result) => {
        if(error){
            let s={"status":"error"};
            console.log(error);

        }else{
            let s={"status":"Success"};
            response.send(result);
        }
        
    });
});
add.post('/addUserDetails',(request,response)=>{
    try{
        console.log(JSON.stringify(request.body));
        let {first_name,last_name,gender,dob,email,phone_number,password}=request.body;
        // if(id!=null&&first_name!=null&&last_name!=null &&email!=null&&phone_number!=null&&password!=null){
            if(Object.keys(request.body)!=0){
        let sql='insert into user_det(first_name,last_name,gender,dob,email,phone_number,password,status, effective_from, effective_to, created_by, created_on) values(?,?,?,?,?,?,?,"A",current_timestamp(),current_timestamp()+interval 3 year,current_user(),current_timestamp())';
        a.query(sql,[first_name,last_name,gender,dob,email,phone_number,password],(error,result)=>{
            // console.log(result);
            // console.log(error);
            if(error){
                console.log(error);
                let s={"status":"error"};
                response.send(s);
                
            }else{ 
                console.log("success");
                let msg = {"status":"Successfully Registered"};
                response.send(msg);
            }
        })}else{
            let s={"status":"InvalidData"};
            response.send(s);
        }
    }catch(e){
        response.send(e);
    }
})
//-------------------
//login API
add.post('/login',(req,res) =>{
    try {
        try {
            let{email,password} = req.body;
            let sql_query = 'select id, email, password, status from user_det where email = ? and password = ? and status = "A"';
            a.query(sql_query,[email,password],(error,result) =>{
                if(error){
                    console.log(error);
                } else {
                    if(result.length > 0){
                        let msg  = {
                            "message" : "login Successfully",
                            "userId"  : result[0].id
                        }
                        res.send(msg);
                    }else{
                        let msg = {
                            'message' : "user details not matched"
                        }
                        res.send(msg)
                    }
                }
            })
        } catch (app_error) {
            res.send(app_error)
        }
    } catch (system_error) {
            res.send(system_error)      
    }
});

//----------Actors Details

// add.get('/actorsdetails',(request,response) =>{
//     console.log('actorsdetails');
    
//     a.query('select id,industry_code,Image,Actor_Name,Actor_type,NickName,Gender,Date_of_birth,Age,Height,Weight,EyeColour,Nationality,HomeTown,Zodiac_sign,Religion,Birth_place,Film_debut,Hobbies,Father_Name,Mother_Name,Siblings,Husband_Wife_Name,Fav_Actor,Fav_Sports,Salary,Market_Cap from actors_details where status = "A"',
//   (error,result) => {
//         if(error){
//             let s={"status":"error"};
//             console.log(error);

//         }else{
//             let s={"status":"Success"};
//             response.send(result);
//         }
//     });
// });
//---------Alter
add.get('/actorsdetails/:industry_code/:Actor_type',(req,res)=>{
    try{
        try{
            let {industry_code,Actor_type} = req.params
            console.log(req.params);
            let Sql_query = 'select id,industry_code,Image,Actor_Name,Actor_type,NickName,Gender,Date_of_birth,Age,Height,Weight,EyeColour,Nationality,HomeTown,Zodiac_sign,Religion,Birth_place,Film_debut,Hobbies,Father_Name,Mother_Name,Siblings,Husband_Wife_Name,Fav_Actor,Fav_Sports,Salary,Market_Cap from actors_details where status = "A" and industry_code = ? and Actor_type = ?'
            a.query(Sql_query,[industry_code,Actor_type],(err,result) => {
                console.log(result);
                res.send({"msg":"success",data:result})
            })
            
        } catch(app_Error){
            res.send(app_Error)
        }
    } catch(system_error){
            res.send(system_error)
    }
})

add.get('/scheduleJob',(request,response) =>{
   try{
        try{
            console.log("Success");
           const job = schedule.scheduleJob('7 * * * * *',()=>{
            console.log(new Date());
            a.query('select first_name,last_name,gender,email from user_det where status="A"',(error,result) => {
                if(error){
                    console.log(error);
        
                }else{
                    console.log(result);
                }
        
        })
            });
            // response.send("working successfully");
        }catch(app_error){
            // response.send(app_Error);
        }
   }catch(system_error){
        // response.send(system_error);
   }

  
});

function sndMail(){
    try {
        var transports;
    transports = nodemailer.createTransport({
        host:"127.0.0.1",
        port:587,
        secure:false,
        service:"gmail",
        auth:{
            user:'santhoshtamil0077@gmail.com',
            pass:'baladeepika'
        },
        tls: {
            rejectUnauthorized: false,
            minVersion: "TLSv1.2"
        }
    })
    if(transports){
        
        var templateMessage = "welcome";
        var msg = util.format(templateMessage,"Happy Sunday")
        var mailOptions = {
            from:'santhoshtamil0077@gamil.com',
            to:'justinsanthosh13@gmail.com',
            subject:"subject",
            text:msg
        };
        transports.sendMail(mailOptions, (error, info)=>{
            if(error) {
                console.log("Unable to send Email: ", "subject", " : ", error);
            } else {
                console.log(info);
            }
        });
    } else{
        console.log("Email is switched Off. Email Not sent with Subject [", "subject" , "]");
    }
    } catch (error) {
        console.log(error);
    }
}
// sndMail();

add.listen(160, () => {
    console.log('server is running on 160 port');
})