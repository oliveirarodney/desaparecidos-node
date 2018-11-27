function DesaparecidosDAO(connection) {
	this._conn = connection
}

DesaparecidosDAO.prototype.storeDesaparecido = function (desaparecido, callback) {
	this._conn.query('insert into desaparecidos set ?, ativo = 1', desaparecido, callback)
}

DesaparecidosDAO.prototype.getAllDesaparecidos = function (callback) {
	this._conn.query("select * from desaparecidos where ativo = 1", callback)
}

DesaparecidosDAO.prototype.getAllDesaparecidosInativos = function (callback) {
	this._conn.query("select * from desaparecidos where ativo = 0", callback)
}

DesaparecidosDAO.prototype.getDesaparecido = function (id, callback) {
	this._conn.query('select * from desaparecidos where iddesaparecido =' + id, callback)
}

DesaparecidosDAO.prototype.getDesaparecidosUser = function (id, callback) {
	this._conn.query('select * from desaparecidos where usuario_id =' + id + ' and ativo = 1', callback)
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

DesaparecidosDAO.prototype.updateDesaparecido = function (desaparecido, callback) {
	this._conn.query('update desaparecidos set ? where iddesaparecido = ' + desaparecido.iddesaparecido, desaparecido, callback)
}

DesaparecidosDAO.prototype.deleteDesaparecido = function (id, callback) {
	this._conn.query('update desaparecidos set ativo = 0 where iddesaparecido = ' + id, callback)
}

DesaparecidosDAO.prototype.restaurarDesaparecido = function (id, callback) {
	this._conn.query('update desaparecidos set ativo = 1 where iddesaparecido = ' + id, callback)
}

module.exports = function(){ 
	return DesaparecidosDAO
}