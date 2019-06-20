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

# Solution 2
SELECT D1.Name AS "Department", E1.Name AS "Employee", E1.Salary
FROM Department D1
JOIN Employee E1 ON D1.Id = E1.departmentId
JOIN Department D2 ON D1.Id = D2.Id
LEFT JOIN Employee E2 ON D2.Id = E2.departmentId AND E1.Salary < E2.Salary
GROUP BY D1.Name, E1.Name, E1.Salary
HAVING COUNT(DISTINCT(E2.Salary)) < 3