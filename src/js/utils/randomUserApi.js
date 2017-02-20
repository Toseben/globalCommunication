var $ = require('jquery');
const userCount = 10;
const API_ROOT = 'https://randomuser.me/api';
const GET_USERS_URL = API_ROOT + '?seed=random&inc=gender,name,picture&results=' + userCount;

export function getUsers() {
  var getUsers = $.ajax({
    url: GET_USERS_URL,
    dataType: 'json'
  });

  return getUsers;
}
