from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    """
    """
    title = serializers.CharField(max_length=255)
    class Meta:
        """
        """
        model = Course
        fields = ["id", "title", "description", "content", "date_created"]
    

