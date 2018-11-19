function DelegaciasDAO(connection) {
	this._conn = connection
}

DelegaciasDAO.prototype.getDelegacias = function (callback) {
	this._conn.query('select estado, delegacia from delegacias', callback)
}

module.exports = function(){ 
	return DelegaciasDAO
}