var userDetail = {
    _id: "ejrjfnjbtnt",
    name: "tobi",
    age: 34,
    isValid: true,
};
// userDetail._id="hrrkbkhbhbbvhvbhjvrvhrrtjbjj;"
console.log(">>>>>>>>>>>", userDetail);
function user(u) {
    return { _id: u._id, name: u.name, age: u.age, isValid: u.isValid };
}
user(userDetail);
console.log(user(userDetail));
