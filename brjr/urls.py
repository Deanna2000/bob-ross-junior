from django.conf.urls import url, include
from brjr import views

urlpatterns = [
	url(r'^$', views.index, name='home'),
	url(r'^birthdays$', views.birthdays, name='birthday')
]