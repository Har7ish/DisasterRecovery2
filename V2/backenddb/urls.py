from django.urls import path, include, re_path

from rest_framework.urlpatterns import format_suffix_patterns
from backenddb import views

urlpatterns=[
    path('profile/',views.ProfileView.as_view()),
    re_path(r'^machine/$',views.MachineListView.as_view()),
    re_path(r'^machine/([a-zA-Z0-9_]+)$',views.MachineView.as_view()),

    re_path(r'^job/$',views.JobListView.as_view()),
    re_path(r'^job/([a-zA-Z0-9_]+)$',views.JobView.as_view()),

    re_path(r'^timecard/$',views.TCListView.as_view()),
    re_path(r'^timecard/([a-zA-Z0-9_]+)$',views.TCView.as_view()),
    

]

urlpatterns = format_suffix_patterns(urlpatterns)