import React from 'react';
import Header from '@/components/Header';
import {Button} from '@/components/ui/button';
import {AlertCircle, Apple} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const Diet = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
            <Header/>

            <main className="pt-28 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="flex flex-wrap items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold">Diet Tracking</h1>
                                <p className="text-muted-foreground mt-1">Monitor your nutrition and manage meal
                                    plans</p>
                            </div>

                            <div className="flex space-x-3 mt-4 sm:mt-0">
                                <Button variant="outline" size="sm">
                                    <AlertCircle className="h-4 w-4 mr-2"/>
                                    Help
                                </Button>
                                <Button size="sm">
                                    <Apple className="h-4 w-4 mr-2"/>
                                    Add Meal
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1} className="mb-8">
                        <div className="bg-health-primary/5 border border-health-primary/10 rounded-lg p-6 text-center">
                            <Apple className="h-10 w-10 mx-auto mb-4 text-health-primary"/>
                            <h2 className="text-xl font-semibold mb-2">Diet Tracking Page</h2>
                            <p className="text-muted-foreground">
                                This is a placeholder for the Diet tracking page. In a complete application,
                                this page would contain meal tracking, nutrition analysis, and diet plans.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </main>
        </div>
    );
};

export default Diet;
