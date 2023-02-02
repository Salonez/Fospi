let userId = "";
let isAdmin = false;

function changeUserId(newId) {
    userId = newId;
}

function changeAdmin(newAdmin) {
    isAdmin = newAdmin;
}

export {userId, changeUserId, isAdmin, changeAdmin};