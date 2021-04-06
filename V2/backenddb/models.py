from django.db import models



class Machine(models.Model):
    machine_code = models.CharField(max_length=50,primary_key=True,unique=True,default='')
    description = models.CharField(max_length=100,unique=False,default='')
    hourly_rent = models.FloatField(null=True,blank=True,default=None)
    maxhoursperday = models.IntegerField(default=0)

    class Meta:
        ordering = ['machine_code']

    def __str__(self):
        return self.machine_code



class Job(models.Model):
    code = models.CharField(max_length=50,primary_key=True,unique=True,default='')
    description = models.CharField(max_length=100,default='')
    hourly_rate = models.FloatField(null=True,blank=True,default=None)
    maxhoursperday = models.IntegerField(default=0)


    class Meta:
        ordering = ['code']

    def __str__(self):
        return self.code


class Timecard(models.Model):
    sitecode = models.CharField(max_length=50,primary_key=True,unique=True,default='')
    contractor_name = models.CharField(max_length=75,default='')
    job=models.ManyToManyField(Job)
    machine=models.ManyToManyField(Machine)
    total_job_hours = models.IntegerField(null=True,blank=True,default=0)
    total_machine_hours=models.IntegerField(null=True,blank=True,default=0)
    total_amount = models.FloatField(null=True,blank=True,default=0)
    status = models.BooleanField(default=False)

    # job=models.ForeignKey(Job, to_field='code', on_delete=models.SET_NULL, null=True)
    # machine=models.ForeignKey(Machine, to_field='machine_code', on_delete=models.SET_NULL, null=True)


    class Meta:
        ordering = ['sitecode']

    def __str__(self):
        return self.sitecode



