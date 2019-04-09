SELECT W1.id from Weather AS W1, Weather AS W2
WHERE DATEDIFF(W1.RecordDate, W2.RecordDate) = 1
AND W1.Temperature > W2.Temperature