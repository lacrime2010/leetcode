SELECT Name AS Customers FROM Customers
WHERE Id NOT IN (SELECT CustomerId from Orders)