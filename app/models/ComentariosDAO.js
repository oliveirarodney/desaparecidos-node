function ComentariosDAO(connection) {
	this._conn = connection
}

ComentariosDAO.prototype.storeComentario = function (comentario, callback) {
	this._conn.query('insert into comentarios set ?, ativo = 1', comentario, callback)
}

ComentariosDAO.prototype.getComentarios = function (id, callback) {
	this._conn.query('select c.idcomentario, c.comentario, c.desaparecido_id, c.created_at, c.usuario_id, u.username from comentarios c inner join usuarios u on c.usuario_id = u.idusuario where c.desaparecido_id =' + id + ' and c.ativo = 1', callback)
}

ComentariosDAO.prototype.updateComentario = function (id, comentario, callback) {
	this._conn.query('update comentarios set ? where idcomentario = ' + id, comentario, callback)
}

ComentariosDAO.prototype.deleteComentario = function (id, callback) {
	this._conn.query('update comentarios set ativo = 0 where idcomentario = ' + id, callback)
}

module.exports = function(){ 
	return ComentariosDAO
}