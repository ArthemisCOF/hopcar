INSERT INTO [dbo].[car]
(
    [car_registration]
      ,[brand]
      ,[model]
      ,[color]
      ,[year]
)
VALUES (
    @carRegistration
      ,@brand
      ,@model
      ,@color
      ,@year
)

SELECT *
FROM [dbo].[car]
WHERE [car_registration] = @carRegistration