-- 完整创建表的示例
CREATE TABLE IF NOT EXISTS `user` (
	ID int PRIMARY KEY AUTO_INCREMENT ,
	name VARCHAR(20) NOT NULL,
	age INT DEFAULT(0),
	phoneNum VARCHAR(20) UNIQUE DEFAULT(''),
	createtime TIMESTAMP
);

-- 1、改表的名字
ALTER TABLE `users` RENAME TO `user`;

-- 2、给表新增加一列
ALTER TABLE `user` ADD `updatetime` TIMESTAMP;

-- 3、修改一个字段
ALTER TABLE `user` CHANGE `phoneNum` `telephone` VARCHAR(20);

-- 4、修改字段的类型
ALTER TABLE `user` MODIFY `name` VARCHAR(30);

-- 5、删除一个字段
ALTER TABLE `user` DROP `age`;

-- 补充
-- 根据一个表结构去创建另一个表
CREATE TABLE `user1` LIKE `user`; 

-- 根据一个表的所有内容去创建一个新的表
CREATE TABLE `user2` (SELECT * FROM `user`); 