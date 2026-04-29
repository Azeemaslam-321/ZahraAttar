import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/products';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#c9a84c]/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#e8d48b] to-[#c9a84c] bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-[#8a8a8a] max-w-lg mx-auto">
            Join thousands of satisfied customers who have made Zahra Attars their signature fragrance
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-7 bg-[#111111]/60 backdrop-blur-sm border border-[#c9a84c]/10 rounded-lg hover:border-[#c9a84c]/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-[#c9a84c]/10 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? 'fill-[#c9a84c] text-[#c9a84c]' : 'text-[#333]'}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#aaa] text-sm leading-relaxed mb-5">{review.text}</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#c9a84c]/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#a07c1c] flex items-center justify-center text-[#0a0a0a] text-xs font-bold">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{review.name}</p>
                  <p className="text-[#8a8a8a] text-xs">
                    {review.location} · {review.product}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-[#111111]/60 backdrop-blur-sm border border-[#c9a84c]/10 rounded-lg">
            <div className="text-center">
              <div className="text-[#c9a84c] font-serif text-2xl font-bold">4.9</div>
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={10} className="fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>
            </div>
            <div className="w-[1px] h-10 bg-[#c9a84c]/15" />
            <div className="text-left">
              <div className="text-white text-sm font-medium">10,000+ Happy Customers</div>
              <div className="text-[#8a8a8a] text-xs">Trusted across India & Middle East</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
