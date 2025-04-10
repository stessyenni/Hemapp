"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var react_router_dom_1 = require("react-router-dom");
var lucide_react_1 = require("lucide-react");
var GlassmorphicCard_1 = require("@/components/ui-elements/GlassmorphicCard");
var FadeIn_1 = require("@/components/animations/FadeIn");
var ApiSetupGuide = function () {
    return (<div className="min-h-screen bg-gradient-to-br from-background to-muted/30 pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn_1.default>
          <h1 className="text-3xl font-bold mb-2">Django Backend Setup Guide</h1>
          <p className="text-muted-foreground mb-8">
            Follow these steps to set up your Python/Django backend with MySQL for Hemapp
          </p>
        </FadeIn_1.default>

        <FadeIn_1.default delay={0.1}>
          <GlassmorphicCard_1.default className="p-6 mb-8">
            <div className="flex items-start">
              <lucide_react_1.Info className="h-5 w-5 text-health-primary mr-3 mt-0.5 flex-shrink-0"/>
              <div>
                <h3 className="font-medium text-sm">This React frontend is configured to work with a Django backend</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  You'll need to create a Django project separately and connect it using the API configuration we've already set up.
                </p>
              </div>
            </div>
          </GlassmorphicCard_1.default>
        </FadeIn_1.default>

        <div className="space-y-6">
          <FadeIn_1.default delay={0.2}>
            <h2 className="text-xl font-semibold mb-4">Django Backend Setup Steps</h2>
          </FadeIn_1.default>

          <FadeIn_1.default delay={0.3}>
            <GlassmorphicCard_1.default className="p-6">
              <div className="flex mb-4">
                <div className="w-6 h-6 rounded-full bg-health-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <lucide_react_1.CheckCircle className="h-4 w-4 text-health-primary"/>
                </div>
                <h3 className="font-medium">1. Set up Python environment</h3>
              </div>
              <div className="pl-9">
                <pre className="bg-muted/30 p-3 rounded-md text-sm overflow-x-auto">
                  <code>
        {"# Create a virtual environment\npython -m venv venv\n\n# Activate virtual environment\n# On Windows\nvenv\\Scripts\\activate\n# On macOS/Linux\nsource venv/bin/activate\n\n# Install Django and required packages\npip install django djangorestframework django-cors-headers mysqlclient"}
                  </code>
                </pre>
              </div>
            </GlassmorphicCard_1.default>
          </FadeIn_1.default>

          <FadeIn_1.default delay={0.4}>
            <GlassmorphicCard_1.default className="p-6">
              <div className="flex mb-4">
                <div className="w-6 h-6 rounded-full bg-health-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <lucide_react_1.CheckCircle className="h-4 w-4 text-health-primary"/>
                </div>
                <h3 className="font-medium">2. Create Django project and configure MySQL</h3>
              </div>
              <div className="pl-9">
                <pre className="bg-muted/30 p-3 rounded-md text-sm overflow-x-auto">
                  <code>
        {"# Create a new Django project\ndjango-admin startproject hemapp_backend\n\n# Navigate to project directory\ncd hemapp_backend\n\n# Configure MySQL in settings.py\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.mysql',\n        'NAME': 'hemapp_db',\n        'USER': 'your_mysql_user',\n        'PASSWORD': 'your_mysql_password',\n        'HOST': 'localhost',\n        'PORT': '3306',\n    }\n}"}
                  </code>
                </pre>
              </div>
            </GlassmorphicCard_1.default>
          </FadeIn_1.default>

          <FadeIn_1.default delay={0.5}>
            <GlassmorphicCard_1.default className="p-6">
              <div className="flex mb-4">
                <div className="w-6 h-6 rounded-full bg-health-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <lucide_react_1.Circle className="h-4 w-4 text-health-primary"/>
                </div>
                <h3 className="font-medium">3. Configure CORS for React frontend</h3>
              </div>
              <div className="pl-9">
                <pre className="bg-muted/30 p-3 rounded-md text-sm overflow-x-auto">
                  <code>
        {"# In settings.py, add:\nINSTALLED_APPS = [\n    # ...\n    'corsheaders',\n    'rest_framework',\n    # ...\n]\n\nMIDDLEWARE = [\n    'corsheaders.middleware.CorsMiddleware',\n    # ... other middleware\n]\n\n# Allow requests from your React app\nCORS_ALLOWED_ORIGINS = [\n    \"http://localhost:5173\",  # Vite's default port\n    \"http://localhost:3000\",  # Alternative React port\n]\n\n# JWT authentication (optional)\nREST_FRAMEWORK = {\n    'DEFAULT_AUTHENTICATION_CLASSES': (\n        'rest_framework_simplejwt.authentication.JWTAuthentication',\n    )\n}"}
                  </code>
                </pre>
              </div>
            </GlassmorphicCard_1.default>
          </FadeIn_1.default>

          <FadeIn_1.default delay={0.6}>
            <GlassmorphicCard_1.default className="p-6">
              <div className="flex mb-4">
                <div className="w-6 h-6 rounded-full bg-health-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <lucide_react_1.Circle className="h-4 w-4 text-health-primary"/>
                </div>
                <h3 className="font-medium">4. Create Django apps for each feature</h3>
              </div>
              <div className="pl-9">
                <pre className="bg-muted/30 p-3 rounded-md text-sm overflow-x-auto">
                  <code>
        {"# Create apps for each feature\npython manage.py startapp authentication\npython manage.py startapp diet\npython manage.py startapp health_tracking\npython manage.py startapp facilities\npython manage.py startapp chatbot\n\n# Create models, serializers, and views for each app\n# Example: authentication/models.py\nfrom django.db import models\nfrom django.contrib.auth.models import AbstractUser\n\nclass User(AbstractUser):\n    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)\n    # Add other fields as needed"}
                  </code>
                </pre>
              </div>
            </GlassmorphicCard_1.default>
          </FadeIn_1.default>

          <FadeIn_1.default delay={0.7}>
            <GlassmorphicCard_1.default className="p-6">
              <div className="flex mb-4">
                <div className="w-6 h-6 rounded-full bg-health-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <lucide_react_1.Circle className="h-4 w-4 text-health-primary"/>
                </div>
                <h3 className="font-medium">5. Set up URL routing</h3>
              </div>
              <div className="pl-9">
                <pre className="bg-muted/30 p-3 rounded-md text-sm overflow-x-auto">
                  <code>
        {"# In hemapp_backend/urls.py\nfrom django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('api/auth/', include('authentication.urls')),\n    path('api/diet/', include('diet.urls')),\n    path('api/health/', include('health_tracking.urls')),\n    path('api/facilities/', include('facilities.urls')),\n    path('api/chatbot/', include('chatbot.urls')),\n    path('api/settings/', include('settings.urls')),\n]"}
                  </code>
                </pre>
              </div>
            </GlassmorphicCard_1.default>
          </FadeIn_1.default>

          <FadeIn_1.default delay={0.8}>
            <GlassmorphicCard_1.default className="p-6">
              <div className="flex mb-4">
                <div className="w-6 h-6 rounded-full bg-health-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <lucide_react_1.Circle className="h-4 w-4 text-health-primary"/>
                </div>
                <h3 className="font-medium">6. Run migrations and start server</h3>
              </div>
              <div className="pl-9">
                <pre className="bg-muted/30 p-3 rounded-md text-sm overflow-x-auto">
                  <code>
        {"# Create and apply migrations\npython manage.py makemigrations\npython manage.py migrate\n\n# Create a superuser\npython manage.py createsuperuser\n\n# Run the development server\npython manage.py runserver"}
                  </code>
                </pre>
              </div>
            </GlassmorphicCard_1.default>
          </FadeIn_1.default>
        </div>

        <FadeIn_1.default delay={0.9} className="mt-8">
          <div className="flex justify-between items-center">
            <button_1.Button variant="outline" asChild>
              <react_router_dom_1.Link to="/">Back to Dashboard</react_router_dom_1.Link>
            </button_1.Button>
            <button_1.Button asChild>
              <a href="https://docs.djangoproject.com/en/stable/" target="_blank" rel="noopener noreferrer">
                Django Documentation
                <lucide_react_1.ExternalLink className="ml-2 h-4 w-4"/>
              </a>
            </button_1.Button>
          </div>
        </FadeIn_1.default>
      </div>
    </div>);
};
exports.default = ApiSetupGuide;
