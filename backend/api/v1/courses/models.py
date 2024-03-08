from django.db import models

class Course(models.Model):
    """Course class"""

    title = models.CharField(max_length=255)
    description = models.TextField()
    content = models.TextField()
    date_created = models.DateField(auto_now_add=True)
    # date_updated =
    # author = 

    def __str__(self):
        return f"{self.title} - {self.description}" 
