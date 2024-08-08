from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from users import views, serializers as serial

urlpatterns = [
    path('user/', views.UserCreateRetrieveUpdateView.as_view(), name='user-detail'),
    path('users/', views.UserListView.as_view(), name='user-list'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
