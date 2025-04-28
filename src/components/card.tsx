import React from 'react';
import { Lightning, Shield, Tag } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkUrl 
}) => {
  return (
    <div className="bg-black rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-50 rounded-full p-4 mb-5">
          <div className="text-blue-900">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={linkUrl} className="text-blue-500 font-medium hover:underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

const WhyChooseXe: React.FC = () => {
  const features: FeatureCardProps[] = [
    // {
    //   icon: <Lightning size={24} />,
    //   title: "Fast transfers",
    //   description: "Send money in seconds to your loved ones across the world.",
    //   linkText: "Track your transfers",
    //   linkUrl: "/track-transfers"
    // },
    {
      icon: <Shield size={24} />,
      title: "Transparent Fees",
      description: "We always strive to give you the best rate with simple fees.",
      linkText: "See our fees",
      linkUrl: "/fees"
    },
    {
      icon: <Tag size={24} />,
      title: "Security",
      description: "We protect your money and data with legal compliance and policy.",
      linkText: "About Xe Security",
      linkUrl: "/security"
    },
    {
      icon: <Tag size={24} />,
      title: "Security",
      description: "We protect your money and data with legal compliance and policy.",
      linkText: "About Xe Security",
      linkUrl: "/security"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-500 text-center text-2xl font-medium mb-5">
          Why choose JETLock
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              linkUrl={feature.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseXe;