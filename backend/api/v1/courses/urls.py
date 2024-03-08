from .views import CoursesListCreateView
from django.urls import path

urlpatterns = [
    path("courses/", CoursesListCreateView.as_view(), name="all_courses_list"),
]