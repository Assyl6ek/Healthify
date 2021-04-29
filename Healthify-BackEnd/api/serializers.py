from django.contrib.auth.hashers import BCryptSHA256PasswordHasher
from rest_framework import serializers
from api import models
from django.contrib.auth.models import User


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.City
        fields = 'id', 'name'
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = 'id', 'name'        

class DoctorSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField()
    imageURL = serializers.CharField()
    experience = serializers.FloatField()
    price = serializers.FloatField()
    category = CategorySerializer()
    city = CitySerializer()

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    encoder = BCryptSHA256PasswordHasher()

    class Meta:
        model = User
        fields = ('username', 'password', 'last_name', 'first_name')

    def create(self, validated_data):
        password = validated_data.pop('password')
        hashed_password = self.encoder.encode(password, salt=self.encoder.salt())
        user = User.objects.create(password=hashed_password, **validated_data)
        user.save()
        return user

class EnrollmentSerializer(serializers.Serializer):
    firstname = serializers.CharField()
    phone = serializers.CharField()
    secondname = serializers.CharField()
    date = serializers.CharField()
    doctor = DoctorSerializer()

class Manager(serializers.ModelSerializer):
    class Meta:
        model = models.Manager
        fields = 'id', 'username'