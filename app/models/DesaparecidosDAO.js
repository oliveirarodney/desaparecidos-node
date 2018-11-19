function DesaparecidosDAO(connection) {
	this._conn = connection
}

DesaparecidosDAO.prototype.storeDesaparecido = function (desaparecido, callback) {
	this._conn.query('insert into desaparecidos set ?, flag = 1', desaparecido, callback)
}

DesaparecidosDAO.prototype.getDesaparecido = function (id, callback) {
	this._conn.query('select * from desaparecidos where id =' + id, callback)
}

DesaparecidosDAO.prototype.getDesaparecidos = function (callback) {
	this._conn.query('select nome, datanasc, dataultimo, foto, estadodes, cidadedes, endvistoultimo from desaparecidos', callback)
}

DesaparecidosDAO.prototype.updateDesaparecido = function (id, desaparecido, callback) {
	this._conn.query('update desaparecido set ? where id = ' + id, desaparecido, callback)
}

DesaparecidosDAO.prototype.deleteDesaparecido = function (id, callback) {
	this._conn.query('update desaparecido set flag = 0 where id = ' + id, callback)
}

module.exports = function(){ 
	return DesaparecidosDAO
}