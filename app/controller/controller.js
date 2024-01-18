const query=require('../dao/queries.js');

module.exports = {

    getpage : function(req,res){
       res.render('dashboard');
    },

    insertdatas : async function(req,res){
        let email = req.body.email;
        let phone = req.body.phone;
        let name = req.body.name;
        let result=await query.insertdata(email,phone,name);
          
      if(result.rowCount > 0){
            res.cookie("user",name);
            res.json({dataresponse : 'success'});
           
      }else{
        res.json({dataresponse : 'error'});
      }
    },

    insert : function(req,res){
        res.render('insert');
    },

    view:async function(req,res){
        let result = await query.getdata();
        res.render('view',{ datas : result.rows });
    },

    delete: async function(req,res){
        let id=req.params.id;
        let result= await query.delete(id);
        return res.redirect('/api/view');
    },

    update:async function(req,res){
        let id=req.body.id;
        let result= await query.update(id);
       return res.json({data : result.rows});
    },

    updated:async function(req,res){
        let id=req.body.id;
        let name=req.body.name;
        let email=req.body.email;
        let phone=req.body.phone;

        console.log(id,name,email,phone);

        let result= await query.updated(id,name,email,phone);
        if(result.rowCount > 0){
            return res.json({updateValue:'success'});
        }else{
            return res.json({updateValue:'error'});
        }
    },

    getcookie:function(req,res){
         let name= req.cookies.user;
         res.render('cookie',{cookies:name});
    }

}