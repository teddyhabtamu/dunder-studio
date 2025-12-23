
import React from 'react';
import { CLIENTS } from '../constants';

const About: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Main Statement */}
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="text-3xl md:text-5xl leading-tight mb-12">
              Based in Stockholm, we are a creative production and post-production house built on dedication, collaboration and care.
            </h2>
            
            <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-800">
              <p>
                We are a full-scale production partner for brands who value impactful imagery. From concept to final delivery, we support our clients with every step of visual content creation. Our team delivers high-quality photography, retouching and digital asset production — either as an independent unit or working seamlessly alongside your in-house team.
              </p>
              <p>
                Beyond e-commerce production and streamlined end-to-end packshot workflows, we create premium creative imagery tailored for campaigns, branding and editorial. We also offer film and post-production coordination, as well as flexible studio rental solutions designed to fit productions of all sizes.
              </p>
            </div>
          </div>

          {/* Client List */}
          <div className="md:col-span-6 lg:col-span-7">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-8">
              Some of our clients:
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-y-2 text-sm md:text-base">
              {CLIENTS.map((client, idx) => (
                <div key={idx} className="py-0.5">{client.name}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default About;
