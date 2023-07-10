const express=require('express')
const router=express.Router()
const db=require('./db')


router.get('/',(request,response)=>{
    const stmt=`select * from books where author='${request.body.author}'`


    db.query(stmt,(error,data)=>{

        console.log(data);

        if (error) {
            response.send('error')
          } else {
            response.send(data)
          }
    })
})
router.post('/',(request,response)=>{
  const stmt=`insert into books values(${request.body.id}, '${request.body.b_name}','${request.body.author}','${request.body.book_type}','${request.body.price}','${request.body.publishDate}','${request.body.language}')`;


  db.query(stmt,(error,data)=>{

      console.log(data);

      if (error) {
          response.send('error')
        } else {
          response.send(data)
        }
  })
})  

router.put('/:id',(request,response)=>{
    // const stmt=`update books set b_name='${request.body.b_name}',author='${request.body.author}',book_type='${request.body.book_type}',price='${request.body.price}',publishDate='${request.body.publishDate}',language='${request.body.language}' where id=${request.params.id}`;
    const stmt=`update books set price='${request.body.price}',language='${request.body.language}' where id=${request.params.id}`;
  
  console.log(stmt);
    db.query(stmt,(error,data)=>{
  
        console.log(data);
  
        if (error) {
            response.send('error')
          } else {
            response.send(data)
          }
    })
  })  


module.exports=router



