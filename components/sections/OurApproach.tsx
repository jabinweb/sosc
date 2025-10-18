import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import siteContent from '../../content/site-content.json';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';


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

export default function OurApproach() {
  const { homepage } = siteContent;

  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="inline-flex items-center bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Methodology
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
              {homepage.approach.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {homepage.approach.subtitle}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {homepage.approach.items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50">
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1434030216411-0b793f4b4173' : 
                        index === 1 ? '1509062522246-3755977927d7' : 
                        '1497486751825-1233686d5d80'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                      alt={item.title}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl font-bold text-brand-primary shadow-lg">
                        {item.letter}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </section>
  )
}
