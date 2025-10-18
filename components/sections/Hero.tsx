import Link from 'next/link';
import Image from 'next/image';
import siteContent from '../../content/site-content.json';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  const { homepage } = siteContent;

  return (
    <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Minimal Text */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Simple Headline */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {homepage.hero.title}
                </h1>

                {/* Brief Description */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                {homepage.hero.description}
                </p>

                {/* Single Primary CTA - Blue Button */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                >
                <Button 
                    size="lg" 
                    className="bg-brand-primary hover:bg-brand-primary-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <Link href="/get-involved">
                    ❤️ Yes! I want to help
                    </Link>
                </Button>
                </motion.div>
            </motion.div>

            {/* Right Image - Clean and Simple */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Image
                src="https://images.unsplash.com/photo-1692269725911-87697c558be1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                alt="Students learning together"
                width={600}
                height={450}
                className="object-cover w-full h-[350px] lg:h-[450px] rounded-lg shadow-xl"
                />
            </motion.div>

            </div>
        </div>
    </section>
  )
}
