from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.contrib.auth.models import User

from api.serializers import CitySerializer, CategorySerializer, DoctorSerializer, EnrollmentSerializer, \
    RegisterSerializer
from api.models import Category, City, Doctor, Enrollment

from django.http.response import JsonResponse

@api_view(['GET'])
def categories(request):
    categories = Category.objects.all()
    return JsonResponse(CategorySerializer(categories, many=True).data, safe=False)

@api_view(['GET'])
def cities(request):
    categories = City.objects.all()
    return JsonResponse(CitySerializer(cities, many=True).data, safe=False)

class Doctors(APIView):
    def get(self, request):
        doctors = Doctor.objects.all()
        return JsonResponse(DoctorSerializer(doctors, many=True).data, safe=False)

    def post(self, request):
        try:
            city = City.objects.get(name=request.data['city'])
        except:
            city = City.objects.crete(name=request.data['city'])
        try:
            category = Category.objects.get(name=request.data['speciality'])
        except:
            category = Category.objects.create(name=request.data['speciality'])

        doctor = Doctor.objects.create(
            name = request.data['name'],
            imageURL = request.data['image'],
            experience = request.data['experience'],
            price = request.data['price'],
            category = category,
            city = city
        )
        return JsonResponse(DoctorSerializer(doctor).data, safe=False)


@api_view(['GET', 'DELETE', 'PUT'])
def doctor_admin(request, id):
    try:
        doctor = Doctor.objects.get(id=id)
    except: 
        return JsonResponse({"error": "doctor is unreachable"}, safe=False)
    
    if request.method == 'DELETE':
        doctor.delete()
        return JsonResponse({"message": "CRUD delete is operational"}, safe=False)
    
    elif request.method == 'PUT':
        doctor.name = request.data.get('name')
        doctor.imageURL = request.data.get('image')
        doctor.experience = request.data.get('experience')
        doctor.price = request.data.get('price')
        doctor.save()
        return JsonResponse({"message": "CRUD UPDATE is operational"}, safe=False)


class EnrollmentView(APIView):
    def post(self, request):
        try:
            doctor = Doctor.objects.get(id=request.data['id'])
        except:
            return JsonResponse({"error": "doctor is not defined"}, safe=False)

        enroll = Enrollment.objects.create(
            firstname = request.data['name'],
            phone = request.data['phone'],
            secondname = request.data['surname'],
            date = request.data['date'],
            doctor = doctor
        )
        return JsonResponse(EnrollmentSerializer(enroll).data, safe=False)

class Register(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer