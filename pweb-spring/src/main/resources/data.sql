INSERT IGNORE INTO ropa.users (id, created_date, last_modified_date, cpf, email, name, password, telephone) VALUES(1, '2021-10-30 18:38:39.427694000', NULL, '479.814.778-83', 'rar@gmail.com', 'rar', '$2a$10$0rmySKtFGY.VPxNEj8Cob.HvdXdyP9LhLjxgp.LaabPu33/rxS9BW', '(11) 97645-4630');

INSERT IGNORE INTO ropa.users (id, created_date, last_modified_date, cpf, email, name, password, telephone) VALUES(2, '2021-11-20 8:39:39.427694000', NULL, '402.472.628-54', 'gnachbar.breve@gmail.com', 'gust', '$2b$10$0rmySKtFGY.VPxNEj8Cob.HvdXdyP9LhLjxgp.LaabPu33/rxS9BW', '(11) 93003-2634');

INSERT IGNORE INTO category(id, nome)
    VALUES(1, 'Camiseta Masculina');

INSERT IGNORE INTO category(id, nome)
    VALUES(2, 'Calça Masculina');

INSERT IGNORE INTO category(id, nome)
    VALUES(3, 'Bermuda Masculina');

INSERT IGNORE INTO category(id, nome)
    VALUES(4, 'Camiseta Feminina');

INSERT IGNORE INTO category(id, nome)
    VALUES(5, 'Calça Feminina');

INSERT IGNORE INTO category(id, nome)
    VALUES(6, 'Bermuda Feminina');

INSERT IGNORE INTO category(id, nome)
    VALUES(7, 'Camiseta Infantil');

INSERT IGNORE INTO category(id, nome)
    VALUES(8, 'Bermuda Infantil');

/*Moda Masculina*/
INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (1, 2, 'Calça de Moletom Básica Masculina', 1, 'https://yhbeulwvfr.map.azionedge.net/img/2021/05/produto/658/1/large/01-calca-moletom-masculina-jogger-slim-bluhen-grecia.png', 'Calça de Moletom', 112.90, 25);
    
INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (2, 1, 'Camisa Básica  Maculina', 1, 'https://yhbeulwvfr.map.azionedge.net/img/2021/09/produto/1235/1/large/01-camiseta-masculina-basica-bluhen-maui.png', 'Camiseta Básica', 59.90, 2);

INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (3, 3, 'Bermuda de Moletom Masculina', 1, 'https://yhbeulwvfr.map.azionedge.net/img/2021/05/produto/545/1/large/01-bermuda-moletom-masculina-bluhen-san-diego.png', 'Bermuda Masculina', 69.90, 20);

/*Moda Feminina*/
INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (5, 4, 'Camiseta Estampada Feminina', 1, 'https://cursodesublimacao.com/wp-content/uploads/2017/05/como-estampar-camiseta-feminina.png', 'Camiseta Feminina', 19.89, 29);
    
INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (6, 5, 'Calça Jeans Cintura Alta Feminina', 1, 'https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(95)/salomaoc/catalog/teste/feminino/calca/calca-f-1-217008.20210802161242.png', 'Calça Jeans', 89.90, 10);
    
/*Blusa Feminina*/

INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (7, 6, 'Short Moletom Feminino', 1, 'https://images.tcdn.com.br/img/img_prod/988252/short_feminino_adidas_603_1_bab4ed2173543ecf775023312dbcd73f.png', 'Short  Moletom Adidas', 39.99, 100);
    
    
/*Moda Infantil*/
INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (8, 7, 'Camiseta Infatil Masculina de Dinossauro', 1, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/032/products/camiseta-dinos-011-4e8620e04234eb855216020889879146-1024-1024.png', 'Camiseta Infatil Masculina', 29.90, 120);
    
    
INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (9, 7, 'Camiseta Infantil Feminina', 1, 'https://i.pinimg.com/originals/5b/9e/31/5b9e31a43090b96b7dfc844b10555e47.png', 'Camiseta Infatil Feminina', 29.90, 120);

INSERT IGNORE INTO ropa.product (id, categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (10, 8, 'Bermuda Masculina Infantil - Moda Praia', 1, 'https://1679028l.ha.azioncdn.net/img/2020/12/produto/4706/1/large/1870.png', 'Bermuda Masculina Infantil', 69.90, 20);
