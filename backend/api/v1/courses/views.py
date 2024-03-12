from rest_framework.decorators import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import CourseSerializer
from .models import Course
from drf_yasg.utils import swagger_auto_schema


class CoursesListCreateView(APIView):
    """Class based view for listing and creating Courses
    """
    serializer_class = CourseSerializer

    @swagger_auto_schema(
        operation_summary="Get all courses available",
        operation_description="List all courses in db"
    )    
    def get(self, request:Request, *args, **kwargs):
        """Return a list of all courses"""
        courses = Course.objects.all()
        serializer = self.serializer_class(instance=courses, many=True)
        response = {
            "meaasage": "all courses",
            "data": serializer.data
        }

        return Response(data=response, status=status.HTTP_200_OK)

    def post(self, request:Request, *args, **kwargs):
        """create a new course"""
        data = request.data
        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()

            response = {
                "message": "course created!",
                "data": serializer.data
            }

            return Response(data=response, status=status.HTTP_201_CREATED)

        return Response(data={"message": "error"}, status=status.HTTP_400_BAD_REQUEST)


class CourseRetrieveUpdateDeleteView(APIView):
    serializer_class = CourseSerializer

    def get(self, request:Request, post_id:int):
        post = get_object_or_404(Course, pk=post_id)

        serializer = self.serializer_class(instance=post)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request:Request, post_id:int):
        post = get_object_or_404(Course, pk=post_id)

        data = request.data

        serializer = self.serializer_class(instance=post, data=data)

        if serializer.is_valid():
            serializer.save()

            response = {
                "message": "course updated",
                "data": serializer.data
            }

            return Response(data=response, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request:Request, post_id:int):
        post = get_object_or_404(Course, pk=post_id)

        post.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
