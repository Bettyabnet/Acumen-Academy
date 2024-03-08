from rest_framework.decorators import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from .serializers import CourseSerializer
from .models import Course


class CoursesListCreateView(APIView):
    """Class based view for listing and creating Courses
    """
    serializer_class = CourseSerializer
    
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
