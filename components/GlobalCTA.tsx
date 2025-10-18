'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
};

const GlobalCTA = () => {
  return (
    <section className="relative py-20 bg-sosc-green text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Every Child Deserves a Fighting Chance
            </h2>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Your support today determines whether the next generation gets to complete their education. 
              Together, we can end education mortality in our lifetime.
            </p>
          </div>
        </motion.div>

        {/* Action Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Donate & Support",
              description: "Fund educational programs and directly impact student lives",
              action: "💝 Donate Now",
              href: "/get-involved",
              color: "bg-white/10 backdrop-blur-sm border border-white/20"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Volunteer with Us",
              description: "Share your skills and time to mentor students worldwide",
              action: "🤝 Join as Volunteer",
              href: "/get-involved",
              color: "bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              ),
              title: "Partner with SOSC",
              description: "Connect your institution with our education transformation network",
              action: "🤝 Become Partner",
              href: "/programs",
              color: "bg-white/10 backdrop-blur-sm border border-white/20"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <Card className={`${item.color} text-white hover:bg-white/20 transition-all duration-500 rounded-2xl overflow-hidden h-full border-0`}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed flex-grow text-sm">
                    {item.description}
                  </p>
                  <motion.div {...scaleOnHover}>
                    <Button 
                      asChild 
                      variant="secondary"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold py-3 rounded-xl backdrop-blur-sm"
                    >
                      <Link href={item.href} className="flex items-center justify-center gap-2">
                        {item.action}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTAs */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              asChild
              size="lg" 
              className="bg-brand-secondary text-gray-900 hover:bg-brand-secondary-400 font-bold px-12 py-6 text-xl shadow-2xl transform hover:scale-105 transition-all"
            >
              <Link href="/get-involved">Donate Now</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-primary font-bold px-12 py-6 text-xl"
            >
              <Link href="/programs">Our Programs</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-center text-white/80">
            <p className="text-lg mb-4">Trusted by educators, parents, and changemakers</p>
            <div className="flex justify-center items-center gap-8 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <span>⭐⭐⭐⭐⭐</span>
                <span>Impact Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏛️</span>
                <span>Legal NGO</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌍</span>
                <span>Community Led</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTA;