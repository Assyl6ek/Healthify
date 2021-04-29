from django.contrib import admin
from api import models
admin.site.register(models.City)
admin.site.register(models.Doctor)
admin.site.register(models.Category)
