import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { services } from '../mock';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional nail care services tailored to your style and preferences. From classic to creative, we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((category, index) => (
              <div key={category.id}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.category}</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((service, idx) => (
                    <Card key={idx} className="border-2 border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl font-bold text-gray-900">{service.name}</CardTitle>
                          <span className="text-2xl font-bold text-rose-600">{service.price}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-3">{service.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{service.duration}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {index < services.length - 1 && (
                  <div className="mt-12 border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>All services include complimentary nail shaping, cuticle care, and hand/foot massage</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>We use only premium, high-quality products for all treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Walk-ins are welcome, but appointments are recommended for faster service</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Custom nail art pricing varies based on complexity - consult with our technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Please arrive 5 minutes early for your appointment</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl mb-10 text-rose-50">
            Schedule your appointment today and let our expert technicians pamper you.
          </p>
          <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-6 text-lg">
            <Link to="/contact">
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;