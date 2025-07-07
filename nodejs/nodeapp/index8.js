import bcrypt from "bcrypt";
const pwd = "password1234";
const hashedpwd = await bcrypt.hash(pwd, 10);
console.log(hashedpwd);

const check = await bcrypt.compare(pwd,hashedpwd)
console.log(check);