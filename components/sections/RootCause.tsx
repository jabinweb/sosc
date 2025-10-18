import Link from 'next/link';
import siteContent from '../../content/site-content.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

export default function RootCause() {
    const { homepage } = siteContent;

  return (
          <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="inline-flex items-center bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Root Cause Analysis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
              {homepage.causes.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              {homepage.causes.subtitle}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {homepage.causes.items.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="h-full border-0 shadow-none bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <CardHeader className="pb-6">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-brand-primary transition-colors">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4">
                      {category.causes.map((cause, causeIndex) => (
                        <li key={causeIndex} className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors">
                          <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Interconnection visualization */}
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-brand-primary-50/30 rounded-3xl p-16 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="w-20 h-20 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Interconnected Challenges</h3>
              <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                These factors don&apos;t exist in isolation. Our comprehensive approach addresses the systemic nature of educational challenges through targeted interventions.
              </p>
              <motion.div {...scaleOnHover}>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary-700 text-white px-8 py-3 rounded-xl font-medium">
                  <Link href="/programs">Explore Our Solutions →</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}
