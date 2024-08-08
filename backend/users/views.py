from django.contrib.auth.models import User
from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated

from users.permissions import AllowAnyForPost
from users.serializers import UserSerializer


class UserCreateRetrieveUpdateView(mixins.CreateModelMixin,
                                   mixins.RetrieveModelMixin,
                                   mixins.UpdateModelMixin,
                                   generics.GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAnyForPost]

    def get_object(self):
        return self.request.user

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class UserListView(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return User.objects.exclude(id=self.request.user.id)
