from django.shortcuts import render

# This view will render our main index.html page
def index(request):
    return render(request, 'index.html')

def hr_login(request):
    return render(request, 'hr_login.html')

def employee_login(request):
    return render(request, 'employee_login.html')

def hr_home(request):
    return render(request, 'hr_home.html')

def employee_home(request):
    return render(request, 'employee_home.html')

def dashboard(request):
    return render(request, 'dashboard.html')