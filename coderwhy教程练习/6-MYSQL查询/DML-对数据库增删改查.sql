-- 插入数据
INSERT INTO `user` VALUES(110,'yzy','1235564','2020-10-10','2020-11-11');
INSERT INTO `user` (name, telephone, `createtime`, `updatetime`) 
							VALUES ('yyn','000-112-123','2020-10-11','2020-11-12');
		
INSERT INTO `user` (name, telephone) 
							VALUES ('lz','000-666457');
							
-- 将 createtime 和 updatetime	可以自动设置值
ALTER TABLE `user` MODIFY `createtime` TIMESTAMP DEFAULT(CURRENT_TIMESTAMP);
ALTER TABLE `user` MODIFY `updatetime` TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
																			 ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO `user` (name, telephone) 
							VALUES ('qq','000-888');
							
-- 删除数据
-- 删除所有数据
DELETE FROM `user`

-- 删除符合条件的数据
DELETE FROM `user` WHERE ID = 110;

-- 更新数据
-- 更新所有的数据
UPDATE `user` SET name ='lily',telephone = '9999999'

-- 更新所有符合条件的数据
UPDATE `user` SET name ='lily',telephone = '9999999' WHERE ID = 125;
