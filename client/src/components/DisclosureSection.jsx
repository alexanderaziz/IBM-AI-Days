// DisclosureSection.js
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const DisclosureSection = () => {
  return (
    
    <div className="max-w-2xl w-full mx-auto bg-white/10 rounded-xl p-6 shadow-lg" style={{ 
        backdropFilter: 'blur(10px)', /* Frosted glass effect */
        boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.05)' /* Outer glow */
    }}>

      <Disclosure as="div" className="mb-4">
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">  
              <span 
                className={`text-lg font-medium ${open ? 'text-[#76ABAE]' : 'text-[#EEEEEE]'} group-hover:text-[#76ABAE]`}
              >
                What is RPG.AI?
              </span>
              <ChevronDownIcon 
                className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                style={{ fill: open ? '#76ABAE' : '#EEEEEE' }} 
              />
            </DisclosureButton>

            <DisclosurePanel className="left-0 top-full mt-2 rounded-md w-full text-left text-[#EEEEEE]">
              RPG.AI is an interactive game powered by AI, designed to help you learn hurricane preparedness through real-time, scenario-based storytelling.
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mb-4">
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">  
              <span 
                className={`text-lg font-medium ${open ? 'text-[#76ABAE]' : 'text-[#EEEEEE]'} group-hover:text-[#76ABAE]`}
              >
                How RPG.AI Works
              </span>
              <ChevronDownIcon 
                className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                style={{ fill: open ? '#76ABAE' : '#EEEEEE' }} 
              />
            </DisclosureButton>

            <DisclosurePanel className="left-0 top-full mt-2 rounded-md w-full text-left text-[#EEEEEE]">
              RPG.AI guides you through hurricane scenarios using AI, adapting to your choices and teaching you real-life preparedness skills.
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      
      <Disclosure as="div" className="mb-4">
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span 
                className={`text-lg font-medium ${open ? 'text-[#76ABAE]' : 'text-[#EEEEEE]'} group-hover:text-[#76ABAE]`}
              >
                Your Choices, Your Story
              </span>
              <ChevronDownIcon 
                className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                style={{ fill: open ? '#76ABAE' : '#EEEEEE' }} 
              />
            </DisclosureButton>

            <DisclosurePanel className="left-0 top-full mt-2 rounded-md w-full text-left text-[#EEEEEE]">
              Your decisions shape the story. Make choices freely, and see how they impact each scenario in real time.
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mb-4">
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span 
                className={`text-lg font-medium ${open ? 'text-[#76ABAE]' : 'text-[#EEEEEE]'} group-hover:text-[#76ABAE]`}
              >
                Trusted Advice and Real Guidelines
              </span>
              <ChevronDownIcon 
                className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                style={{ fill: open ? '#76ABAE' : '#EEEEEE' }} 
              />
            </DisclosureButton>

            <DisclosurePanel className="left-0 top-full mt-2 rounded-md w-full text-left text-[#EEEEEE]">
              Every tip and action is based on official hurricane guidelines, ensuring your choices are informed and reliable.
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
        
      <Disclosure as="div" className="mb-4">
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span 
                className={`text-lg font-medium ${open ? 'text-[#76ABAE]' : 'text-[#EEEEEE]'} group-hover:text-[#76ABAE]`}
              >
                Interactive Learning Through Gameplay
              </span>
              <ChevronDownIcon 
                className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                style={{ fill: open ? '#76ABAE' : '#EEEEEE' }} 
              />
            </DisclosureButton>

            <DisclosurePanel className="left-0 top-full mt-2 rounded-md w-full text-left text-[#EEEEEE]">
              Learn by playing. Experience realistic situations that make hurricane preparedness engaging and memorable.
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mb-4">
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span 
                className={`text-lg font-medium ${open ? 'text-[#76ABAE]' : 'text-[#EEEEEE]'} group-hover:text-[#76ABAE]`}
              >
                AI as Your Guide
              </span>
              <ChevronDownIcon 
                className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                style={{ fill: open ? '#76ABAE' : '#EEEEEE' }} 
              />
            </DisclosureButton>

            <DisclosurePanel className="left-0 top-full mt-2 rounded-md w-full text-left text-[#EEEEEE]">
              Our AI guides the story, offers feedback, and keeps everything on topic to ensure an immersive experience.
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      

    </div>
  );
};

export default DisclosureSection;
