from rest_framework import serializers
from rest_framework.validators import ValidationError
from rest_framework.authtoken.models import Token
from .models import User


class SignUpSerializer(serializers.ModelSerializer):
    email = serializers.CharField(max_length=80)
    # username = serializers.CharField(max_length=45)
    password = serializers.CharField(min_length=8, write_only=True)
    first_name = serializers.CharField(max_length=30)
    middle_name = serializers.CharField(max_length=30, required=False, allow_blank=True)
    last_name = serializers.CharField(max_length=30)
    date_of_birth = serializers.DateField()
    gender = serializers.ChoiceField(choices=User.GENDER_CHOICES)
    grade = serializers.CharField(max_length=10)


    class Meta:
        model = User
        fields = [
            "email",
            "password",
            "first_name",
            "middle_name",
            "last_name",
            "date_of_birth",
            "gender",
            "grade"
        ]


    def validate(self, attrs):
        email_exists = User.objects.filter(email=attrs["email"]).exists()

        if email_exists:
            raise ValidationError("Email already exists")

        return super().validate(attrs)

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = super().create(validated_data)
        user.set_password(password)
        user.save()

        Token.objects.create(user=user)
        return user
