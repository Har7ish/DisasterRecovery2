from rest_framework import serializers
from backenddb.models import Machine, Job, Timecard

class SerializeMachine(serializers.ModelSerializer):
    class Meta:
        model=Machine
        fields=('machine_code','description','hourly_rent','maxhoursperday')

class SerializeJob(serializers.ModelSerializer):
    class Meta:
        model=Job
        fields=('code','description','hourly_rate','maxhoursperday')

class SerializeTimecard(serializers.ModelSerializer):
    
    class Meta:
        model=Timecard
        fields=('sitecode','contractor_name','job','machine','total_hours','total_amount','status')
        depth=1
    
    # def to_representation(self, instance):
    #     self.fields['job'] =  SerializeJob(read_only=True)
    #     self.fields['machine'] = SerializeMachine(read_only=True)
    #     return super(SerializeTimecard, self).to_representation(instance)
    
   



       