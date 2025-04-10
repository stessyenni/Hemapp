"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// @ts-ignore
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui-elements/button");
var react_router_dom_1 = require("react-router-dom");
var header_tsx_1 = require("@/components/ui-elements/header.tsx");
var FeatureCard_1 = require("@/components/features/FeatureCard");
var DietSection_1 = require("@/components/dashboard/DietSection");
var AssistiveSection_1 = require("@/components/dashboard/AssistiveSection");
var GlassmorphicCard_1 = require("@/components/ui-elements/GlassmorphicCard");
var FadeIn_1 = require("@/components/animations/FadeIn");
var utils_1 = require("@/lib/utils");
var mobileFeatures = [
    {
        icon: <lucide_react_1.Apple className="h-6 w-6"/>,
        title: 'Diet Monitoring',
        description: 'Track your daily nutrition and calorie intake with ease.',
    },
    {
        icon: <lucide_react_1.BookOpen className="h-6 w-6"/>,
        title: 'Recipe Suggestions',
        description: 'Get personalized recipe recommendations based on your goals.',
    },
    {
        icon: <lucide_react_1.Target className="h-6 w-6"/>,
        title: 'Goal Management',
        description: 'Set and track your health and fitness goals.',
    },
    {
        icon: <lucide_react_1.Globe className="h-6 w-6"/>,
        title: 'Language Options',
        description: 'Use the app in multiple languages for global accessibility.',
    },
    {
        icon: <lucide_react_1.CloudOff className="h-6 w-6"/>,
        title: 'Offline Mode',
        description: 'Access key features even without an internet connection.',
    },
    {
        icon: <lucide_react_1.MapPin className="h-6 w-6"/>,
        title: 'Facility Finder',
        description: 'Locate health facilities and services_config near you.',
    },
    {
        icon: <lucide_react_1.Bot className="h-6 w-6"/>,
        title: 'Smart Chatbot',
        description: 'Get instant answers to your health and nutrition questions.',
    },
    {
        icon: <lucide_react_1.Mic className="h-6 w-6"/>,
        title: 'Voice Control',
        description: 'Control the app using voice commands for hands-free operation.',
    },
];
var assistiveFeatures = [
    {
        icon: <lucide_react_1.Mic className="h-6 w-6"/>,
        title: 'Speech-to-Text',
        description: 'Convert spoken words to text for easier interaction.',
    },
    {
        icon: <lucide_react_1.Braces className="h-6 w-6"/>,
        title: 'Braille Support',
        description: 'Full compatibility with braille reading devices.',
    },
    {
        icon: <lucide_react_1.Map className="h-6 w-6"/>,
        title: 'Maps Integration',
        description: 'Navigate to health facilities with accessible directions.',
    },
    {
        icon: <lucide_react_1.Eye className="h-6 w-6"/>,
        title: 'Screen Reader',
        description: 'Compatible with screen reading technologies.',
    },
];
var Index = function () {
    var _a = (0, react_1.useState)(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = (0, react_1.useState)('dashboard'), activeTab = _b[0], setActiveTab = _b[1];
    (0, react_1.useEffect)(function () {
        // Simulate loading delay
        var timer = setTimeout(function () {
            setIsLoading(false);
        }, 500);
        return function () { return clearTimeout(timer); };
    }, []);
    if (isLoading) {
        return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-health-primary/30 border-t-health-primary animate-spin"></div>
          <h2 className="text-xl font-medium text-foreground/80">Loading Dashboard</h2>
        </div>
      </div>);
    }
    return (<div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <header_tsx_1.default />

      <main className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn_1.default>
            <div className="flex flex-wrap items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Health Dashboard</h1>
                <p className="text-muted-foreground mt-1">Monitor your health goals and manage your diet</p>
              </div>

              <div className="flex space-x-3 mt-4 sm:mt-0">
                <button_1.Button variant="outline" size="sm">
                  <lucide_react_1.AlertCircle className="h-4 w-4 mr-2"/>
                  Help
                </button_1.Button>
                <button_1.Button size="sm">Get Mobile App</button_1.Button>
                <button_1.Button variant="outline" size="sm" asChild>
                  <react_router_dom_1.Link to="/api-setup-guide">
                    <lucide_react_1.Server className="h-4 w-4 mr-2"/>
                    Django Setup
                  </react_router_dom_1.Link>
                </button_1.Button>
              </div>
            </div>
          </FadeIn_1.default>

          <FadeIn_1.default delay={0.1} className="mb-8">
            <div className="bg-health-primary/5 border border-health-primary/10 rounded-lg p-4">
              <div className="flex items-start">
                <lucide_react_1.AlertCircle className="h-5 w-5 text-health-primary mr-3 mt-0.5 flex-shrink-0"/>
                <div>
                  <h3 className="font-medium text-sm">Welcome to your health dashboard!</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    This is a preview of your personalized health management dashboard.
                    Download the mobile app to access all features and track your health on the go.
                    Click on "Django Setup" to see how to connect this frontend to a Python/Django backend.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn_1.default>

          <div className="mb-8">
            <FadeIn_1.default delay={0.2}>
              <div className="flex border-b mb-8">
                <button className={(0, utils_1.cn)("pb-2 px-4 font-medium text-sm transition-colors relative", activeTab === 'dashboard'
            ? "text-health-primary"
            : "text-muted-foreground hover:text-foreground")} onClick={function () { return setActiveTab('dashboard'); }}>
                  Dashboard
                  {activeTab === 'dashboard' && (<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-health-primary"/>)}
                </button>
                <button className={(0, utils_1.cn)("pb-2 px-4 font-medium text-sm transition-colors relative", activeTab === 'features'
            ? "text-health-primary"
            : "text-muted-foreground hover:text-foreground")} onClick={function () { return setActiveTab('features'); }}>
                  Features
                  {activeTab === 'features' && (<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-health-primary"/>)}
                </button>
                <button className={(0, utils_1.cn)("pb-2 px-4 font-medium text-sm transition-colors relative", activeTab === 'accessibility'
            ? "text-health-primary"
            : "text-muted-foreground hover:text-foreground")} onClick={function () { return setActiveTab('accessibility'); }}>
                  Accessibility
                  {activeTab === 'accessibility' && (<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-health-primary"/>)}
                </button>
              </div>
            </FadeIn_1.default>

            {activeTab === 'dashboard' && (<DietSection_1.default />)}

            {activeTab === 'features' && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mobileFeatures.map(function (feature, index) { return (<FeatureCard_1.default key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} delay={0.05 * index}/>); })}
              </div>)}

            {activeTab === 'accessibility' && (<AssistiveSection_1.default />)}
          </div>

          {activeTab === 'dashboard' && (<div>
              <FadeIn_1.default delay={0.3}>
                <h2 className="text-xl font-semibold mb-5">Smart Assistant</h2>
              </FadeIn_1.default>

              <FadeIn_1.default delay={0.4}>
                <GlassmorphicCard_1.default className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-health-primary/10 flex items-center justify-center mr-3">
                      <lucide_react_1.Bot className="h-5 w-5 text-health-primary"/>
                    </div>
                    <div>
                      <h3 className="font-medium">Health Assistant</h3>
                      <p className="text-xs text-muted-foreground">Ask me anything about your health</p>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4 mb-4">
                    <div className="flex">
                      <div className="w-8 h-8 rounded-full bg-health-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <lucide_react_1.Bot className="h-4 w-4 text-health-primary"/>
                      </div>
                      <div>
                        <p className="text-sm">
                          Hello! I'm your personal health assistant. I can help you track your diet,
                          suggest recipes, and answer questions about your health goals. What would you like to know today?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <input type="text" placeholder="Ask a question..." className="flex-1 rounded-l-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-health-primary"/>
                    <button_1.Button className="rounded-l-none">
                      <lucide_react_1.Mic className="h-4 w-4 mr-2"/>
                      Ask
                    </button_1.Button>
                  </div>
                </GlassmorphicCard_1.default>
              </FadeIn_1.default>
            </div>)}
        </div>
      </main>
    </div>);
};
exports.default = Index;
