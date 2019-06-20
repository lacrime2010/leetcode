# Solution 1
SELECT
  D.Name as Department,
  E.Name as Employee,
  E.Salary as Salary 
FROM
  Employee E, Department D
WHERE
  # Find top 3 salary
  (SELECT COUNT(DISTINCT(Salary))FROM Employee 
   WHERE DepartmentId = E.DepartmentId AND Salary > E.Salary)
  IN (0, 1a, 2)
  AND E.DepartmentId = D.Id 
ORDER BY E.DepartmentId, E.Salary DESC;
