function DesaparecidosDAO(connection) {
	this._conn = connection
}

DesaparecidosDAO.prototype.storeDesaparecido = function (desaparecido, callback) {
	this._conn.query('insert into desaparecidos set ?, ativo = 1', desaparecido, callback)
}

DesaparecidosDAO.prototype.getDesaparecido = function (id, callback) {
	this._conn.query('select * from desaparecidos where iddesaparecido =' + id, callback)
}

DesaparecidosDAO.prototype.getDesaparecidosUser = function (id, callback) {
	this._conn.query('select * from desaparecidos where usuario_id =' + id, callback)
}

DesaparecidosDAO.prototype.getAllDesaparecidos = function (callback) {
	this._conn.query('select * from desaparecidos', callback)
}

DesaparecidosDAO.prototype.getNomeDesaparecidos = function (search, callback) {
	this._conn.query("select * from desaparecidos where nome like '%" + search.nome + "%'", callback)
}

DesaparecidosDAO.prototype.getCidadeDesaparecidos = function (search, callback) {
	this._conn.query("select * from desaparecidos where cidadedes = '" + search.cidadedes + "'", callback)
}

DesaparecidosDAO.prototype.getSearchDesaparecidos = function (search, callback) {
	this._conn.query("select * from desaparecidos where nome like '%" + search.nome + "%' and cidadedes = '" + search.cidadedes + "'", callback)
}

DesaparecidosDAO.prototype.updateDesaparecido = function (comentario, callback) {
	this._conn.query('update desaparecido set ? where iddesaparecido = ' + comentario.iddesaparecido, comentario.comentario, callback)
}

DesaparecidosDAO.prototype.deleteDesaparecido = function (id, callback) {
	this._conn.query('update desaparecido set flag = 0 where id = ' + id, callback)
}

module.exports = function(){ 
	return DesaparecidosDAO
}