const { pgsql }=require('../config/database.js');

const a= class data{

 static getdata(){
    return pgsql.query(`select id,name,email,phone from employees`);
 }
 
 static insertdata(email,phone,name){
    console.log('query method');
   return pgsql.query(`insert into employees(email,phone,name) values
    ($1,$2,$3)`,[email,phone,name]);
 }

 static delete(id){
   return pgsql.query(`delete from employees where id=$1`,[id]);
 }

 static update(id){
   return pgsql.query(`select id,name,email,phone from employees where id=$1`,
   [id]);
 }

 static updated(id,name,email,phone){
   return pgsql.query(`update employees set name=$1,email=$2,phone=$3 where id=$4`,
   [name,email,phone,id]);
 }

}

module.exports = a;