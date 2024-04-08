 var db=require('../dbconnection');
 var fs = require('fs');
 var Agent_Details=
 { 
Save_Agent_Details:function(Agent_Details_,callback)
 { 
   console.log(Agent_Details_)
return db.query("CALL Save_Agent_Details("+
"@Agent_Id_ :=?,"+
"@Agent_Name_ :=?,"+
"@Phone_ :=?,"+
"@Email_ :=?,"+
"@Address_ :=?,"+
"@Description_ :=?"+")"

 ,[Agent_Details_.Agent_Id,
  Agent_Details_.Agent_Name,
  Agent_Details_.Phone,
  Agent_Details_.Email,
  Agent_Details_.Address,
  Agent_Details_.Description
],callback);
 }
 ,
 Delete_Agent_Details:function(Agent_Id_,callback)
 { 
return db.query("CALL Delete_Agent_Details(@Agent_Id_ :=?)",[Agent_Id_],callback);
 }
 ,
 Get_Agent_Details:function(Agent_Id_,callback)
 { 
return db.query("CALL Get_Agent_Details(@Agent_Id_ :=?)",[Agent_Id_],callback);
 }
 ,
 Search_Agent_Details:function(Agent_Name_,callback)
 { 
    if(Agent_Name_==='undefined'||Agent_Name_===''||Agent_Name_===undefined )
    Agent_Name_='';
return db.query("CALL Search_Agent_Details(@Agent_Name_ :=?)",[Agent_Name_],callback);
 },



//  Get_Menu_Status:function(Menu_Id_,Login_User_,callback)
//  { 
//    return db.query("CALL Get_Menu_Status(@Menu_Id_ :=?,@Login_User_:=?)", [Menu_Id_,Login_User_],callback);
//  } ,
  };
  module.exports=Agent_Details;

