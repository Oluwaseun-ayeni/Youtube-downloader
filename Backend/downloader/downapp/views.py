from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pytube import YouTube
from .serializers import VideoSerializer
from .models import Video
import os
from django.http import HttpResponse
import tempfile



class DownloadView(APIView):
    def post(self, request):
        try:
            video_url = request.data.get('url')
            video_quality = request.data.get('quality')
            yt = YouTube(video_url)

            # Extract video by resolution
            stream = yt.streams.filter(res=video_quality).first()
            
            # Create a unique file name
            file_handle, file_path = tempfile.mkstemp(suffix='.mp4')
            
            # Download the video to the unique file name
            stream.download(file_path)

            video_title = yt.title
            video_description = yt.description
            video_uploader = yt.author
            video = Video.objects.create(title=video_title, 
                                        description=video_description, 
                                        uploader=video_uploader,
                                        download_path=file_path)
            video.save()

            os.close(file_handle)
            
            with open(file_path, 'rb') as fp:
                response = HttpResponse(fp.read(), content_type='video/mp4')
                response['Content-Disposition'] = 'attachment; filename=' + stream.default_filename
                return response
                
                
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        



    def get(self, request):
        videos = Video.objects.all()
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data)





 
       
      
