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