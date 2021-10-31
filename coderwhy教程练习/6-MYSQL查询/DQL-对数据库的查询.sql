-- DQL
-- 创建表
CREATE TABLE IF NOT EXISTS `products` (
	id int PRIMARY KEY AUTO_INCREMENT ,
	brand VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	price DOUBLE NOT NULL,
	score DECIMAL(2,1),
	voteCnt INT,
	url VARCHAR(100),
	pid INT
);

-- #2.1基础查询
SELECT * FROM `products`;

-- 查询指定字段
SELECT price,title FROM `products`;

-- 对字段起别名
SELECT price AS phonePrice FROM `products`;


#2.2 where 条件查询
-- 查询价格为200以下的
SELECT title,price FROM `products` WHERE price<2000;
-- 查询品牌为华为的
SELECT title,price FROM `products` WHERE brand= '华为';

#where 逻辑查询
SELECT title,price FROM `products` WHERE price<3000 AND price>2000;
SELECT title,price FROM `products` WHERE price>3000 || price<2000;
-- between包含等于
SELECT title,price FROM `products` WHERE price BETWEEN 1000 AND 2000;

#若过有null ，可以查询是否有null
SELECT * FROM `products` WHERE url IS NULL;

#2.3 where模糊查询
-- 查找所有title以M开头的
SELECT * FROM `products` WHERE title LIKE 'M%';
-- 查找所有title带M的
SELECT * FROM `products` WHERE title LIKE '%M%';
-- 查找所有title第二位包含P的
SELECT * FROM `products` WHERE title LIKE '_P%';

#2.4 IN表示所有中取一一个即可
SELECT * FROM `products` WHERE price=1000 || price=2000 || price=3000
SELECT * FROM `products` WHERE price IN (1000,2000,3000);

#3. 结果排序
SELECT * FROM `products` WHERE price IN (1000,2000,3000) ORDER BY id ASC,score DESC;

# 分页查询
-- LIMIT limit OFFSET offset
-- LIMIT offset, limit 
SELECT * FROM `products` LIMIT 20 OFFSET 0;
SELECT * FROM `products` LIMIT 20 OFFSET 20;
SELECT * FROM `products` LIMIT 40,20;