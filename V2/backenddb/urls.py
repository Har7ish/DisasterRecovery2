from django.urls import path, include, re_path

from rest_framework.urlpatterns import format_suffix_patterns
from backenddb import views

urlpatterns=[
    path('profile/',views.ProfileView.as_view()),
    re_path(r'^machine/$',views.MachineListView.as_view()),
    re_path(r'^machine/([a-zA-Z0-9_]+)$',views.MachineView.as_view()),

    # re_path(r'^job/$',views.jobApi),
    # re_path(r'^job/([0-9]+)$',views.jobApi),

    # re_path(r'^timecard/$',views.timecardApi),
    # re_path(r'^timecard/([0-9]+)$',views.timecardApi),
    

]

urlpatterns = format_suffix_patterns(urlpatterns)