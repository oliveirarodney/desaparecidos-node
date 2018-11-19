create database Desaparecidos;

use Desaparecidos;

create table `usuarios` (
	idusuario 		int 		primary key auto_increment, 
	username 		varchar(20) unique 		not null, 
	email 			varchar(50) unique 		not null, 
	password 		varchar(36) 			not null, 
	created_at 		timestamp  , 
	updated_at 		timestamp  , 
	adm				boolean					not null,
	ativo 			boolean 				not null
);

create table `desaparecidos` (
	iddesaparecido 		int 		primary key auto_increment, 
	nome 				varchar(50) 			not null, 
	datanasc 			date 					not null, 
	dataultimo 			date 					not null, 
	foto 				blob 					not null, 
	estadodes 			varchar(20) 			not null, 
	cidadedes 			varchar(30) 			not null, 
	caracteristicasfis 	text 					not null, 
	vestimenta 			text 					not null, 
	usuario_id 			int 					not null, 
	endvistoultimo 		varchar(50) 			not null, 
	created_at 			timestamp	, 
	updated_at 			timestamp	, 
	ativo 				boolean 				not null,
	foreign key (usuario_id) references usuarios (idusuario)
);

create table `comentarios` (
	idcomentario 		int primary key auto_increment, 
	comentario 			varchar(500) 	not null, 
	desaparecido_id 	int 			not null, 
	usuario_id 			int 			not null, 
	created_at 			timestamp	, 
	updated_at 			timestamp	, 
	ativo 				boolean 		not null,
	foreign key (desaparecido_id) references desaparecidos (iddesaparecido),
	foreign key (usuario_id) references usuarios (idusuario)
);

create table `delegacias` (
	iddelegacia int 		primary key auto_increment,
	estado		varchar(30) not null,
	delegacia 	varchar(50),
	created_at 	timestamp  , 
	updated_at 	timestamp								 
);