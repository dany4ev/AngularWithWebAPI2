CREATE TABLE [dbo].[Credentials]
(
	[Id] NVARCHAR(150) NOT NULL PRIMARY KEY, 
    [Fname] NVARCHAR(50) NULL, 
    [Lname] NVARCHAR(50) NULL, 
    [Email] NVARCHAR(50) NULL, 
    [Password] NVARCHAR(50) NULL
)
