from django.urls import path
from accounts import views, users

app_name = 'accounts'

urlpatterns = [
path('', views.index, name='index'),
path('user-profile', users.user_profile, name='user_profile')
]