from django.db import models
# Create your models here.


class City(models.Model):
    name = models.CharField(max_length=50)


class Category(models.Model):
    name = models.CharField(max_length=50)


class Doctor(models.Model):
    name = models.CharField(max_length=60)
    imageURL = models.CharField(max_length=600)
    experience = models.FloatField()
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, blank=True, null=True)


class Enrollment(models.Model):
    firstname = models.CharField(max_length=60)
    phone = models.CharField(max_length=60)
    secondname = models.CharField(max_length=60)
    date = models.CharField(max_length=60)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, blank=True, null=True)


class Manager(models.Model):
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=60)

