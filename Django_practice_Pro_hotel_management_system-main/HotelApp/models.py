from django.db import models

# Create your models here.
class Authorregis(models.Model):
    Id = models.AutoField(primary_key=True)
    Fname = models.CharField(max_length=255)
    Lname = models.CharField(max_length=255)
    Email = models.CharField(max_length=255,unique=True)
    Phone_Number = models.IntegerField()
    Password = models.CharField(max_length=255)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    def __str__(self):
        return self.Fname
    class Meta:
        db_table = 'Authority_reg'

class Online_Booking(models.Model):
    Id = models.AutoField(primary_key=True)
    Check_in = models.CharField(max_length=255)
    Check_out = models.CharField(max_length=255)
    ADULT = models.CharField(max_length=255)
    CHILDREN = models.CharField(max_length=255)
    Name = models.CharField(max_length=255)
    Surname = models.CharField(max_length=255)
    Email = models.CharField(max_length=255)
    Phone_Number = models.IntegerField()
    City = models.CharField(max_length=255)
    Country = models.CharField(max_length=255)
    Nid_No = models.CharField(max_length=255)
    Img = models.ImageField(upload_to='')
    Address = models.CharField(max_length=255)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    def __str__(self):
        return self.Name
    class Meta:
        db_table = 'Online_Booking_table'

class Offline_Booking(models.Model):
    Customer_Id = models.AutoField(primary_key=True)
    Check_in = models.CharField(max_length=255)
    Check_out = models.CharField(max_length=255)
    First_Name = models.CharField(max_length=255)
    Last_Name = models.CharField(max_length=255)
    Email = models.CharField(max_length=255)
    Mobile_Number = models.IntegerField()
    ADULT = models.CharField(max_length=255)
    CHILDREN = models.CharField(max_length=255)
    Total_Person = models.IntegerField()
    Select_Room = models.CharField(max_length=255)
    Room_Number = models.CharField(max_length=255)
    Gender = models.CharField(max_length=255)
    Personal_Identity = models.CharField(max_length=255)
    Upload_Image = models.ImageField(upload_to='')
    Country = models.CharField(max_length=255)
    Address = models.CharField(max_length=255)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    def __str__(self):
        return self.First_Name
    class Meta:
        db_table = 'Offline_Booking_Customer'


class Add_Employee(models.Model):
    Employee_Id = models.CharField(max_length=255,primary_key=True)
    First_Name = models.CharField(max_length=255)
    Last_Name = models.CharField(max_length=255)
    Email = models.CharField(max_length=255,unique=True)
    Mobile_Number = models.IntegerField(unique=True)
    Joining_Date = models.CharField(max_length=255)
    Dateof_Birth = models.CharField(max_length=255)
    Departments = models.CharField(max_length=255)
    Gender = models.CharField(max_length=255)
    Blood_Group = models.CharField(max_length=255)
    Education = models.CharField(max_length=255)
    Personal_Identity = models.CharField(max_length=255,unique=True)
    Guardian = models.CharField(max_length=255)
    Guardian_Number = models.IntegerField()
    Upload_Image = models.ImageField(upload_to='')
    Address = models.CharField(max_length=255)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    def __str__(self):
        return self.First_Name
    class Meta:
        db_table = 'Add_Employees'

class Add_Room(models.Model):
    Id = models.AutoField(primary_key=True)
    Room_Number = models.CharField(max_length=255,unique=True)
    Room_Type = models.CharField(max_length=255)
    Room_Floor = models.CharField(max_length=255)
    Room_Facility = models.CharField(max_length=500)
    Room_Price = models.CharField(max_length=255)
    Room_Image = models.ImageField(upload_to='')
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    def __str__(self):
        return self.Room_Number
    class Meta:
        db_table = 'Add_Room'

class Add_Salarys(models.Model):
    Employee_Id = models.ForeignKey(Add_Employee,on_delete=models.CASCADE)
    Employee_Name = models.CharField(max_length=255)
    Mobile_Number = models.CharField(max_length=255)
    Email = models.CharField(max_length=500)
    Departments = models.CharField(max_length=255)
    Salary = models.CharField(max_length=255)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    def __str__(self):
        return self.Employee_Id
    class Meta:
        db_table = 'Add_Employee_salarys'