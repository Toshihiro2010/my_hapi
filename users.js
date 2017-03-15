var users = [
    {
    "id" : 1,
    "username": "goldroger",
    "name" : "Gol D. Roger",
    "position" : "Pirate King"
},
{
    "id" : 2,
    "username": "mrzero",
    "name" : "Sir Crocodile",
    "position" : "Former-Shichibukai"
},
{
    "id": 3,
    "username": "luffy",
    "name": "Monkey D. Luffy",
    "position": "Captain"
},
{
    "id": 4,
    "username": "kuzan",
    "name": "Aokiji",
    "position": "Former Marine Admiral"
},
{
    "id": 5,
    "username": "shanks",
    "name": "'Red-Haired' Shanks",
    "position": "The 4 Emperors"
}
]
var strMessage = {
"statusCode": 404,
"error": "Not Found"
};
exports.errorStatus = function(){
    strMessage;
};

/* ฟังก์ชันสำหรับหา user ทั้งหมดในระบบ ในส่วนนี้ผมจะให้ส่งค่า user ทั้งหมดกลับไปเลย*/

exports.findall = function() {
    return users;
};

/* ฟังก์ชันสำหรับหา user จาก id ในส่วนนี้ เราจะวน loop หา user ที่มี id ตามที่ระบุแล้วส่งกลับไป */

exports.findById = function (id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i];
        }
    }
};
exports.findById2 = function (id,username) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id && users[i].username == username) {
            return users[i];
        }
    }
};


exports.save = function(user){
    users.push(user);
}