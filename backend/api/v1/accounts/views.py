from django.shortcuts import render
from django.contrib.auth import authenticate
from .serializers import SignUpSerializer
from rest_framework import generics, status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.
class SignUpView(generics.GenericAPIView):
    serializer_class = SignUpSerializer

    def post(self, request=Request):
        data = request.data

        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()
            response = {
                "messsage": "user created successfully",
                "data": serializer.data
            }

            return Response(data=response, status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request:Request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if user is not None:
            response = {
                "message": "Login Successful",
                "token": user.auth_token.key
            }
            return Response(data=response, status=status.HTTP_200_OK)

        else:
            return Response(data={"message": "Invalid login credentials"})

    def get(self, request:Request):
        content = {
            "user": str(request.user),
            "token": str(request.auth)
        }

        return Response(data=content, status=status.HTTP_200_OK)