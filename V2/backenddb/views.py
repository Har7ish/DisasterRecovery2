from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.http import Http404

from backenddb.models import Machine, Job, Timecard
from backenddb.serializers import SerializeMachine, SerializeJob, SerializeTimecard

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework import viewsets, status, mixins, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class ProfileView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),  
            'auth': str(request.auth),  
        }
        return Response(content)

class MachineListView(APIView):
    def get(self, request, format=None):
        machine = Machine.objects.all()
        machine = SerializeMachine(machine, many=True)
        return Response(machine.data)

    def post(self,request, format=None):
        machine_data=JSONParser().parse(request)
        machine_serializer = SerializeMachine(data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)

class MachineView(APIView):

    def get_object(self, mc):
        try:
            return Machine.objects.get(machine_code=mc)
        except Machine.DoesNotExist:
            raise Http404

    def get(self, request, mc, Format=None): 
        machine = SerializeMachine(self.get_object(mc))
        return Response(machine.data)
    

    def put(self, request, mc, format=None):
        machine_data = JSONParser().parse(request)
        machine=Machine.objects.get(machine_code=machine_data['machine_code'])
        machine_serializer=SerializeMachine(machine,data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    def delete(self,request, mc, format=None):

        machine=Machine.objects.get(machine_code=mc)
        machine.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)


##############################################################Job API#################################################################### 
class JobListView(APIView):
    def get(self, request, format=None):
        job = Job.objects.all()
        job = SerializeJob(job, many=True)
        return Response(job.data) 

    def post(self,request, format=None):
        job_data=JSONParser().parse(request)
        job_serializer = SerializeJob(data=job_data)
        if job_serializer.is_valid():
            job_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)

class JobView(APIView):

    def get_object(self, jc):
        try:
            return Job.objects.get(code=jc)
        except Job.DoesNotExist:
            raise Http404

    def get(self, request, jc, Format=None): 
        job = SerializeJob(self.get_object(jc))
        return Response(job.data)
    

    def put(self, request, jc, format=None):
        job_data = JSONParser().parse(request)
        job=Job.objects.get(code=job_data['code'])
        job_serializer=SerializeJob(job,data=job_data)
        if job_serializer.is_valid():
           job_serializer.save()
           return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    def delete(self,request, jc, format=None):

        job=Job.objects.get(code=jc)
        job.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)


# #########################################################TimeCard API###############################################################

class TCListView(APIView):
    def get(self, request, format=None):
        tc = Timecard.objects.all()
        tc = SerializeTimecard(tc, many=True)
        return Response(tc.data) 

    # def post(self,request, format=None):
    #     tc_data=JSONParser().parse(request)
    #     tc_serializer = SerializeTimecard(data=tc_data)
    #     if tc_serializer.is_valid():
    #         tc_serializer.save()
    #         return JsonResponse("Added Successfully!!" , safe=False)
    #     return JsonResponse("Failed to Add.",safe=False)

    def post(self, request, *args, **kwargs):
        data = request.data

        new_tc = Timecard.objects.create(
            sitecode=data["sitecode"], contractor_name=data["contractor_name"], total_hours=data["total_hours"], total_amount=data["total_amount"],status=data["status"])

        new_tc.save()

        for job in data["job"]:
            job_obj = Job.objects.get(code=job["code"])
            new_tc.job.add(job_obj)
        
        for machine in data["machine"]:
            machine_obj = Machine.objects.get(machine_code=machine["machine_code"])
            new_tc.machine.add(machine_obj)
        
        tc_serializer = SerializeTimecard(new_tc)
        return Response(tc_serializer.data)




class TCView(APIView):

    def get_object(self, sc):
        try:
            return Timecard.objects.get(sitecode=sc)
        except Timecard.DoesNotExist:
            raise Http404

    def get(self, request, sc, Format=None): 
        tc = SerializeTimecard(self.get_object(sc))
        return Response(tc.data)
    

    def put(self, request, sc, format=None):
        tc_data = JSONParser().parse(request)
        tc=Timecard.objects.get(sitecode=tc_data['sitecode'])
        tc_serializer=SerializeTimecard(tc,data=tc_data)
        if tc_serializer.is_valid():
           tc_serializer.save()
           return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    def delete(self,request, sc, format=None):

        tc=Timecard.objects.get(sitecode=sc)
        tc.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)
