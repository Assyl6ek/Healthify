from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token

from api.views import Register

urlpatterns = [
    path('doctors/', views.Doctors.as_view()),
    path('enroll/', views.EnrollmentView.as_view()),
    path('categories/', views.categories),
    path('cities/', views.cities),
    path('doctors/<int:id>/', views.doctor_admin),
    path('login/', obtain_jwt_token),
    path('register/', Register.as_view()),
    path('admin/', views.isAdmin)
]