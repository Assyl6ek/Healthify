from rest_framework import serializers
from api import models
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