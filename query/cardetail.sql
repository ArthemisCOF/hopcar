SELECT [car_registration]
      ,[brand]
      ,[model]
      ,[remark]
      ,[color]
      ,[year]
  FROM [dbo].[car]
  WHERE [car_registration] = @carRegistration