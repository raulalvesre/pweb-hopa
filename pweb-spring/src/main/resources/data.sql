INSERT IGNORE INTO ropa.users (id, created_date, last_modified_date, cpf, email, name, password, telephone) VALUES(1, '2021-10-30 18:38:39.427694000', NULL, '479.814.778-83', 'rar@gmail.com', 'rar', '$2a$10$0rmySKtFGY.VPxNEj8Cob.HvdXdyP9LhLjxgp.LaabPu33/rxS9BW', '(11) 97645-4630');

INSERT IGNORE INTO category(nome)
    VALUES('Camiseta Masculina');

INSERT IGNORE INTO category(nome)
    VALUES('Calça Masculina');

INSERT IGNORE INTO category(nome)
    VALUES('Bermuda Masculina');

INSERT IGNORE INTO category(nome)
    VALUES('Camiseta Feminina');

INSERT IGNORE INTO category(nome)
    VALUES('Calça Feminina');

INSERT IGNORE INTO category(nome)
    VALUES('Bermuda Feminina');

INSERT IGNORE INTO category(nome)
    VALUES('Camiseta Infantil');

/*Moda Masculina*/
INSERT IGNORE INTO ropa.product (categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (2, 'Calça Jeans Básica Masculina', 1, 'https://s.alicdn.com/@sc04/kf/Uab75066b2e264287906f19f9a563b1cfS.png', 'Calça Jeans', 112.90, 25);
    
INSERT IGNORE INTO ropa.product (categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (1, 'Camisa Básica  Maculina', 1, 'https://thenorthface.vteximg.com.br/arquivos/ids/177540-1000-1000/4AAZNH2G-Camiseta-Masculina-TNF-Logo-Tee-Azul-detalhe-4.png?v=637388978919530000', 'Camiseta Básica', 59.90, 2);

INSERT IGNORE INTO ropa.product (categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (3, 'Bermuda de Sarja Masculina', 1, 'https://www.transitolivre.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/2/0/20210401_123526.png', 'Bermuda Masculina', 69.90, 20);

/*Moda Feminina*/
INSERT IGNORE INTO ropa.product (categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (4, 'Camiseta Magali Feminina', 1, 'https://static3.tcdn.com.br/img/img_prod/322139/camiseta_feminina_magali_50_anos_high_score_1457_2_20200214105419.jpg', 'Camiseta Magali', 19.89, 29);
    
INSERT IGNORE INTO ropa.product (categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (5, 'Calça Jeans Cintura Super Alta Feminina', 1, 'https://static.wixstatic.com/media/5fbbc4_27c6ffe1ece84be4bcc219e7f1d41299~mv2.png/v1/fill/w_854,h_1292,al_c/5fbbc4_27c6ffe1ece84be4bcc219e7f1d41299~mv2.png', 'Calça Jeans', 89.90, 10);
    
/*Blusa Feminina*/

INSERT IGNORE INTO ropa.product (categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (6, 'Short Jeans Cintura Alta Feminino', 1, 'https://t-static.dafiti.com.br/c91bx2dlvpA0PAZXSpybWKWP60g=/fit-in/430x623/static.dafiti.com.br/p/ks-casual-%26-sport-short-jeans-feminino-destroyed-rasgado-premium-4410-9111408-1-zoom.jpg', 'Short Jeans Cintura Alta', 39.99, 100);
    
    
/*Moda Infantil*/
INSERT IGNORE INTO ropa.product (categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (7, 'Camiseta Infatil Masculina de Dinossauro', 1, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/032/products/camiseta-dinos-011-4e8620e04234eb855216020889879146-1024-1024.png', 'Camiseta Infatil Masculina', 29.90, 120);
    
    
INSERT IGNORE INTO ropa.product (categoria_id, descricao, destaque, imagem, nome, valor, quantidade)
	VALUES (7, 'Camiseta Infantil Feminina', 1, 'https://i.pinimg.com/originals/5b/9e/31/5b9e31a43090b96b7dfc844b10555e47.png', 'Camiseta Infatil Feminina', 29.90, 120);
