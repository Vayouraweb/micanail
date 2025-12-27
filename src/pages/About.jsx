import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { aboutContent } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Mica Nail Beauty</span>
            </h1>
            <p className="text-xl text-gray-600">
              Your destination for premium nail care and artistry in Clarence, NY
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full mx-auto" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {aboutContent.story}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {aboutContent.mission}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => {
              const icons = [Sparkles, Heart, Users, Award];
              const Icon = icons[index];
              
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Mica Nail Beauty?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full mx-auto" />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Technicians</h3>
                <p className="text-gray-700">Our team brings years of professional experience and ongoing training in the latest nail care techniques and trends.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Products</h3>
                <p className="text-gray-700">We exclusively use high-quality, professional-grade products from trusted brands to ensure the best results and nail health.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hygiene & Safety First</h3>
                <p className="text-gray-700">We maintain the highest standards of cleanliness and sterilization. All tools are properly sanitized, and disposable items are used when appropriate.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Service</h3>
                <p className="text-gray-700">We take the time to understand your preferences and provide customized recommendations to achieve your desired look.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Relaxing Atmosphere</h3>
                <p className="text-gray-700">Our salon provides a comfortable, welcoming environment where you can relax and enjoy your pampering experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl mb-10 text-rose-50">
            Visit us today and discover why Mica Nail Beauty is Clarence's premier nail salon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;