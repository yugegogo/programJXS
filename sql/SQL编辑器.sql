﻿create database jxsCheckIn
create table userMessage(
       username char(11) primary key,
       userpass varchar(16) not null
)
insert into userMessage values("","")