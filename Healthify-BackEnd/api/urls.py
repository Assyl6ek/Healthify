from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    path('doctors/', views.Doctors.as_view()),
    path('enroll/', views.EnrollmentView.as_view()),
    path('categories/', views.categories),
    path('doctors/<int:id>/', views.doctor_admin),
    path('login/', obtain_jwt_token)
]