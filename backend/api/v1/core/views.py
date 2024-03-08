from rest_framework.decorators import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status


class ApiStatusView(APIView):
    """Class based view for API status"""
    
    def get(self, request:Request, *args, **kwargs):
        """Return the API status"""
        return Response(data={"status": "ok"}, status=status.HTTP_200_OK)

