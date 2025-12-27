import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, Heart, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services, testimonials, galleryImages } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        
        {/* Hero Images - Floating nail art showcase */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 opacity-90 hidden lg:block">
            <img
              src="https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg"
              alt="Elegant nail art"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-32 left-16 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 opacity-90 hidden lg:block">
            <img
              src="https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg"
              alt="Professional manicure"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-12 opacity-80 hidden xl:block">
            <img
              src="https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg"
              alt="Feminine nail design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Premium Nail Care in Clarence, NY</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Where Beauty
              <br />
              <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Meets Artistry
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Experience premium nail care with our skilled technicians. From classic manicures to stunning nail art, we bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
              <div>
                <div className="text-4xl font-bold text-rose-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-rose-600 mb-2">5★</div>
                <div className="text-sm text-gray-600">Google Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-rose-600 mb-2">6+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Experience the Art of <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Beautiful Nails</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our talented technicians combine years of expertise with the latest trends to create stunning nail designs that express your unique style. Every detail matters, from the first consultation to the final polish.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Techniques</h3>
                    <p className="text-sm text-gray-600">Professional training and continuous skill development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Care</h3>
                    <p className="text-sm text-gray-600">Custom designs tailored to your preferences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                    <img
                      src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg"
                      alt="Professional nail technician at work"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
                    <img
                      src="https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg"
                      alt="Beautiful nail art"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
                    <img
                      src="https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg"
                      alt="Elegant nail design"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                    <img
                      src="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg"
                      alt="Nail care service"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're committed to providing exceptional nail care with attention to every detail</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Artistry</h3>
                <p className="text-gray-600">Our skilled technicians bring years of experience and passion for nail art to every appointment.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Products</h3>
                <p className="text-gray-600">We use only the highest quality products to ensure beautiful, long-lasting results.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Hours</h3>
                <p className="text-gray-600">Open 6 days a week with convenient hours to fit your busy schedule. Walk-ins welcome!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From classic to creative, we offer a full range of nail care services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex justify-between">
                        <span>{item.name}</span>
                        <span className="font-semibold text-rose-600">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get inspired by our latest nail designs and transformations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <span className="text-white text-sm font-medium p-4">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our happy clients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{testimonial.name}</span>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Beautiful Nails?</h2>
          <p className="text-xl mb-10 text-rose-50">
            Book your appointment today and experience the Mica Nail Beauty difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <a href="tel:7164074105">Call Us: (716) 407-4105</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;