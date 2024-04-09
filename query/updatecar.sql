UPDATE [dbo].[car]
SET 
       [brand] = @brand
      ,[model] = @model
      ,[remark] = @remark
      ,[color] = @color
      ,[year] = @year
WHERE [car_registration] = @carRegistration

SELECT *
FROM [dbo].[car]
WHERE [car_registration] = @carRegistration