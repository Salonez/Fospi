let userId = "";
let admin = false;

function changeUserId(newId) {
    userId = newId;
}

function changeAdmin(newAdmin) {
    admin = newAdmin;
}

export {userId, changeUserId, admin, changeAdmin};