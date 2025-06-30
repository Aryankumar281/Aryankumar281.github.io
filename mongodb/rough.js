db.users.find({},{_id:0,name:1,age:1}) // find all users with name and age only
db.users.find({},{_id:false,name:true,age:true}) // same as above
db.users.drop() // to delete the db
db.employees.find().skip(1) // to skip the first document
db.employees.find().limit(1) // to limit the result to 1 document
db.employees.find().skip(1).limit(1) // to skip the first document and limit the result to 1 document
db.employees.find({department:"IT"}) // to find all employees in IT department
db.employees.find({department:"IT"},{_id:0,name:1}) // to find all employees in IT department with name only
db.employees.find(
    {department:{$eq:"IT"}},
    {_id:0,name:1}
) // same as above
db.employees.find(
    {salary:{$gt:3000}},
    {_id:0,name:1}
)  // to find all employees with salary greater than 3000 with name only
db.employees.find(
    {salary:{$gte:3000}},
    {_id:0,name:1}
) // to find all employees with salary greater than or equal to 3000 with name only
db.employees.find(
    {salary:{$gt:3000},department:"IT"},
    {_id:0,name:1,salary:1}
) // to find all employees with salary greater than 3000 in IT department with name and salary
db.employees.find(
    {$or: [{salary:{$lte:3000}},{department:"IT"}]},
    {_id:0,name:1,salary:1}
) // to find all employees with salary less than or equal to 3000 or in IT department with name and salary
db.employees.find({department:{$ne:"IT"}},{_id:0,name:1}) // to find all employees not in IT department with name only
db.employees.find({department:{$in: ["Admin","HR"]}})// to find all employees in Admin or HR department
db.employees.find({department:{$nin: ["Admin","HR"]}}) // to find all employees not in Admin or HR department
db.employees.updateOne({email:"mike@gmail.com"},
    {$set:{salary:3000}}
) // to update the salary of employee with email mike@gmail.com
db.employees.updateMany({},{$set:{point:1}}) // to update all employees with point 1
db.employees.updateMany({department:"IT"},{$inc:{point:3}}) // to update all employees in IT department with point 1

db.employees.updateOne({email:"krish@gmail.com"},
    {$set:{name:"krish",department:"HR",salary:2700}},
    {upsert:true}
) // to update the employee with email krish@gmail.com, if not found, insert a new document

db.employees.deleteOne({email:"krish@gmail.com"}) // to delete the employee with email krish@gmail.com

db.employees.deleteMany({department:"Admin"}) // to delete all employees in Admin department
db.employees.find({},{_id:0,name:1}).sort({name:1})// to sort the result by name in ascending order
db.employees.find({},{_id:0,name:1}).sort({name:-1}) // to sort the result by name in descending order
db.employees.find({},{_id:0,name:1}).sort({salary:-1}).limit(1) // to sort the result by salary in descending order and limit the result to 1 document
db.employees.find({},{_id:0,EmpName:"$name"}) // to find all employees with name only
db.employees.updateMany(
    {},
    {$rename: {point:"score"}}
)// to rename the field point to score in all employees
db.employees.updateMany(
    {},
    {$unset: {point:"score"}}
) // to remove the field point from all employees

db.employees.find({},{_id:0,EmpName:"$name"})// to find all employees with name only


db.employees.updateMany(
    {},
    {$push: {points:3}}
)