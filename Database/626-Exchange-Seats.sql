SELECT 
IF (id < (select count(*) from seat), IF(id mod 2 = 0, id - 1, id + 1), IF(id mod 2 = 0, id - 1, id)) as id, student
FROM seat
ORDER BY id