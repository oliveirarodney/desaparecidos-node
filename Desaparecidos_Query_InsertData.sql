insert into `usuarios` (username, email, password, adm, ativo) values
	('rodney'	, 'rodney@gmail.com'	, '202cb962ac59075b964b07152d234b70', 1, 1), /*password = 123*/
	('thales'	, 'thales@gmail.com'	, '250cf8b51c773f3f8dc8b4be867a9a02', 1, 1), /*password = 456*/
	('henrique' , 'henrique@gmail.com'	, '68053af2923e00204c3ca7c6a3150cf7', 0, 1), /*password = 789*/
	('bordignon', 'bordignon@gmail.com'	, '68053af2923e00204c3ca7c6a3150cf7', 0, 1);  /*password = 789*/

insert into `desaparecidos`(nome, datanasc, dataultimo, foto, estadodes, cidadedes, caracteristicasfis, vestimenta, usuario_id, endvistoultimo, ativo) values
	('teste', '2005-10-01', '2018-10-01', 'teste.jpg', 'Alagoas', 'Água Branca'	, 'teste', 'teste', 1, 'teste', 1)
	('teste', '2005-10-01', '2018-10-01', 'teste.jpg', 'Acre'	, 'Acrelândia'	, 'teste', 'teste', 2, 'teste', 1)
	
insert into `delegacias` (estado, delegacia) values
	('Acre'				  , ''),
	('Alagoas'			  , ''),
	('Amapá'			  , ''),
	('Amazonas'			  , ''),
	('Bahia'			  , ''),
	('Ceará'			  , 'www.delegaciaeletronica.ce.gov.br/beo/index.jsp'),
	('Distrito Federal'	  , ''),
	('Espírito Santo'	  , 'pc.es.gov.br/pessoas-desaparecidas'),
	('Goiás'			  , 'www.policiacivil.go.gov.br'),
	('Maranhão'			  , 'www.ssp.ma.gov.br/disque-denuncia/desaparecidos/'),
	('Mato Grosso'		  , ''),
	('Mato Grosso do Sul' , ''),
	('Minas Gerais'		  , ''),
	('Pará'				  , ''),
	('Paraíba'			  , ''),
	('Paraná'			  , ''),
	('Pernambuco'		  , ''),
	('Piauí'			  , ''),
	('Rio de Janeiro'	  , ''),
	('Rio Grande do Norte', ''),
	('Rio Grande do Sul'  , ''),
	('Rondônia'			  , ''),
	('Roraima'			  , ''),
	('Santa Catarina'	  , ''),
	('São Paulo'		  , ''),
	('Sergipe'			  , ''),
	('Tocantins'		  , '');	