function UsuariosDAO(connection) {
	this._conn = connection
}

UsuariosDAO.prototype.storeUsuario = function (usuario, callback) {
	this._conn.query('insert into usuarios set ?, adm = 0, ativo = 1', usuario, callback)
}

UsuariosDAO.prototype.authUsuario = function (usuario, callback) {
	this._conn.query("select * from usuarios where username = '" + usuario.username + "' and password = '" + usuario.password + "' and ativo = 1", callback)
}

UsuariosDAO.prototype.updateUsuario = function (usuario, callback) {
	this._conn.query('update usuarios set ? where idusuario = ' + usuario.idusuario , usuario, callback)
	console.log('atualizado no banco de dados')
}

UsuariosDAO.prototype.deleteUsuario = function (idusuario, callback) {
	this._conn.query('update usuarios set ativo = 0 where idusuario = ' + idusuario, callback)
}

module.exports = function(){ 
	return UsuariosDAO
}