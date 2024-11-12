import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export default function ProjectCard({ title, description, imageUrl, category }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-6 text-white">
            <span className="text-purple-400 text-sm font-medium">{category}</span>
            <h3 className="text-xl font-bold mt-1">{title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}