from django.shortcuts import render
from brjr.models	import Birthday
from django.http import JsonResponse

# Create your views here.
def index(request):
	return render(request, 'brjr/index.html')

def birthdays(request):
	birthdays = Birthday.objects.all().values()
	bday_list = list(birthdays)
	return JsonResponse(bday_list, safe=False)
