db.employees.find()
db.employees.find().skip(1)
db.employees.find().limit(1)
db.employees.find().skip(1).limit(1)
db.employees.find({department:"IT"})
db.employees.find({department:"IT"},{_id:0,name:1})
db.employees.find(
    {department:{$eq:"IT"}},
    {_id:0,name:1}
)

db.employees.find(
    {salary:{$gt:3000},department:"IT"},
    {_id:0,name:1}
)

db.employees.find(
    {$or: [{salary:{$lte:3000}},{department:"IT"}]},
    {_id:0,name:1,salary:1}
)
