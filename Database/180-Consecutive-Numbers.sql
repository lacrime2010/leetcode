SELECT DISTINCT a.Num AS ConsecutiveNums FROM Logs AS a, Logs AS b, Logs AS c
WHERE a.Id + 1 = b.Id
AND b.Id + 1 = c.Id
AND a.Num = b.Num
AND b.Num = c.Num