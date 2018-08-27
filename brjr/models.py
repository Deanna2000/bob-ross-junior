from django.db import models


class Birthday(models.Model):
    '''
    author: Deanna Vickers
    purpose: build a model for birthday data
    '''
    date = models.DateField(auto_now=False, auto_now_add=False)
    name = models.CharField(max_length=50)
    greeting = models.CharField(max_length=150)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "birthdays"