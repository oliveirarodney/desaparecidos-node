function UsuariosDAO(connection) {
	this._conn = connection
}

UsuariosDAO.prototype.storeUsuario = function (usuario, callback) {
	this._conn.query('insert into usuarios set ?, flag = 1', usuario, callback)
}

UsuariosDAO.prototype.authUsuario = function (usuario, callback) {
	this._conn.query("select * from usuarios where username = '" + usuario.username + "' and password = '" + usuario.password + "'", callback)
}

UsuariosDAO.prototype.updateUsuario = function (id, usuario, callback) {
	this._conn.query('update usuario set ? where id = ' + id, usuario, callback)
}

UsuariosDAO.prototype.deleteUsuario = function (id, callback) {
	this._conn.query('update usuario set flag = 0 where id = ' + id, callback)
}

module.exports = function(){ 
	return UsuariosDAO
}