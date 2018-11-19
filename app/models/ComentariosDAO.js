function ComentariosDAO(connection) {
	this._conn = connection
}

ComentariosDAO.prototype.storeComentario = function (comentario, callback) {
	this._conn.query('insert into comentarios set ?, flag = 1', comentario, callback)
}

ComentariosDAO.prototype.getComentarios = function (id, callback) {
	this._conn.query('select * from comentarios where id =' + id, callback)
}

ComentariosDAO.prototype.updateComentario = function (id, comentario, callback) {
	this._conn.query('update comentario set ? where id = ' + id, comentario, callback)
}

ComentariosDAO.prototype.deleteComentario = function (id, callback) {
	this._conn.query('update comentario set flag = 0 where id = ' + id, callback)
}

module.exports = function(){ 
	return ComentariosDAO
}