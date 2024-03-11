from .views import CoursesListCreateView, CourseRetrieveUpdateDeleteView
from django.urls import path

urlpatterns = [
    path("courses/", CoursesListCreateView.as_view(), name="all_courses_list"),
    path("courses/<int:post_id>", CourseRetrieveUpdateDeleteView.as_view(), name="get-update-delete-post")
]