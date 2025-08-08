from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('auth/hr_login/', views.hr_login, name='hr_login'),
    path('auth/employee_login/', views.employee_login, name='employee_login'),
    path('hr_home/', views.hr_home, name='hr_home'),
    path('employee_home/', views.employee_home, name='employee_home'),
    path('dashboard/', views.dashboard, name='dashboard'),
]