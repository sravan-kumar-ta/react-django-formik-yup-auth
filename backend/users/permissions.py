from rest_framework.permissions import BasePermission


class AllowAnyForPost(BasePermission):
    def has_permission(self, request, view):
        if request.method == 'POST':
            return True  # Allow access for POST requests
        return request.user and request.user.is_authenticated
