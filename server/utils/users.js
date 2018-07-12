class Users {
	constructor () {
		this.users = [];	
	}
	addUser (id, name, room) {
		var user = {id, name, room};
		this.users.push(user);
		return user;
	}
	removeUser (id) {
        let i = this.users.findIndex((u) => u.id === id)
        if (i >= 0) {
            return this.users.splice(i, 1)[0];
        }
	}
	getUser (id) {
		return this.users.filter((user) => user.id === id)[0];
	}
	getUserList (room) {
		var users = this.users.filter((user) => user.room === room);
		var namesArray = users.map((user) => user.name);

		return namesArray
	}
}


module.exports = {Users};