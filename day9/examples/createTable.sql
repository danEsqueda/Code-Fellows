--psql -d class-examples -f createTable.sql -a

create table Customers
(
  id int,
  firstName varchar(255),
  lastName varchar(255)
);

select * from Customers;
