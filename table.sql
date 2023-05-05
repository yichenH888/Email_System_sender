use emailsender;
create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    email varchar(50),
    UNIQUE (email)
);

insert into user(name, contactNumber, email, password, status, role) values('Admin', '1231231', 'admin@gmail.com', 'admin','true','admin');
