SELECT Department.Name AS Department ,Employee.Name AS Employee ,Employee.Salary FROM Employee, Department
WHERE Employee.DepartmentId = Department.id 
AND (DepartmentId, Salary) in (SELECT DepartmentId, max(Salary) as max FROM Employee GROUP BY DepartmentId)