/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Container from "@/utils/Container";
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/utils/DarkMoodProvider";

const benefits = [
  {
    id: 1,
    title: "Provide Warmth and Comfort",
    description:
      "Donating winter clothes provides essential warmth and comfort to individuals and families in need, helping them stay healthy and safe during the cold winter months.",
    icon: "🧥",
    blog: `
        Winter can be harsh for those without adequate clothing. Donating winter clothes ensures that individuals and families facing financial hardship or homelessness have access to warm layers. This simple act of generosity provides much-needed warmth and comfort, protecting vulnerable populations from cold-related illnesses and improving their overall well-being.
  
        Beyond physical warmth, donating winter clothes also provides emotional comfort. It shows compassion and solidarity with those struggling to stay warm during the coldest months of the year. Your donations can make a significant difference in someone's life, offering reassurance and support during challenging times.
      `,
  },
  {
    id: 2,
    title: "Promote Sustainability",
    description:
      "Donating unused winter clothes promotes sustainability by reducing waste and giving clothes a new life.",
    icon: "♻️",
    blog: `
        Donating winter clothes is not only a gesture of kindness but also a sustainable choice. It extends the lifecycle of clothing items that might otherwise end up in landfills, contributing to environmental degradation. By giving your gently used winter clothes a second chance through donation, you reduce waste and lessen the environmental impact of textile production and disposal.
  
        Sustainable fashion practices, such as clothing donation, play a crucial role in conserving natural resources and reducing greenhouse gas emissions associated with manufacturing new clothing. Your decision to donate helps preserve our planet for future generations by minimizing the carbon footprint of the fashion industry and promoting a more circular economy.
      `,
  },
  {
    id: 3,
    title: "Support Local Charities",
    description:
      "Donating winter clothes supports local charities and organizations dedicated to helping those in need within your community.",
    icon: "🏠",
    blog: `
        Local charities and nonprofit organizations rely on community support to carry out their missions effectively. By donating winter clothes to local charities, you directly contribute to their efforts to assist individuals and families facing financial hardship or crisis situations. Your donations enable these organizations to provide essential resources, such as warm clothing, to those who need it most.
  
        Supporting local charities also strengthens the fabric of your community. It fosters a sense of solidarity and compassion among residents, demonstrating the power of collective action in addressing social issues. When you donate locally, you help build a stronger, more resilient community where everyone has access to the resources and support they need to thrive.
      `,
  },
  {
    id: 4,
    title: "Empower Individuals and Families",
    description:
      "Your donations empower individuals and families to face the challenges of winter with dignity and resilience.",
    icon: "💪",
    blog: `
        Winter can pose significant challenges for individuals and families experiencing homelessness or financial hardship. By donating winter clothes, you empower them to navigate these challenges with dignity and resilience. Access to warm clothing is essential for maintaining health and well-being during the cold winter months, enabling individuals to focus on improving their circumstances and pursuing opportunities for personal growth.
  
        Your donations provide more than just physical warmth; they offer a sense of security and self-worth to those in need. By supporting individuals and families with essential winter clothing, you affirm their value and contribute to their overall well-being. Your act of generosity can inspire hope and motivate recipients to overcome adversity, fostering a brighter future for themselves and their loved ones.
      `,
  },
  {
    id: 5,
    title: "Create Lasting Positive Impact",
    description:
      "Make a lasting positive impact on someone's life by providing essential winter clothing through your donations.",
    icon: "🌟",
    blog: `
        The impact of your donation goes beyond immediate relief; it creates lasting positive change in someone's life. Providing essential winter clothing can transform a person's outlook and give them the confidence to face challenges with resilience and determination. Your generosity can inspire hope, restore dignity, and empower individuals to pursue their goals and dreams.
  
        For children, having access to warm clothing ensures they can attend school comfortably and participate in extracurricular activities. It supports their educational journey and encourages them to strive for academic success. Your donations help create a supportive environment where children can learn, grow, and thrive, regardless of their economic circumstances.
  
        For adults and families, winter clothing donations provide the resources needed to maintain health and well-being during the cold winter months. It allows parents to focus on providing for their families and pursuing opportunities for personal and professional growth. Your support enables individuals to break the cycle of poverty and build a stable and secure future for themselves and their loved ones.
  
        Moreover, the positive impact of your donation extends to the broader community. By supporting individuals in need, you contribute to a more compassionate and inclusive society where everyone has the opportunity to live with dignity and respect. Your actions set an example of kindness and generosity, inspiring others to join you in making a difference. Together, we can create a brighter future for all.
      `,
  },
  {
    id: 6,
    title: "Inspire Others to Give",
    description:
      "Your act of generosity can inspire others to join in and make a difference in their community, fostering a culture of giving and compassion.",
    icon: "🌈",
    blog: `
        Giving is contagious. When you donate winter clothes, you inspire others to take action and make a positive impact in their community. Your generosity serves as a powerful example of how individuals can come together to create meaningful change and support those in need. By sharing your story and encouraging others to get involved, you help build a culture of giving and compassion that strengthens communities and transforms lives.
  
        Your act of kindness can spark a chain reaction of goodwill. When people see the difference you've made through your donations, they are often motivated to contribute in their own way. This collective effort amplifies the impact of individual contributions and creates a sense of solidarity among community members. It demonstrates that everyone has the power to make a difference, no matter how big or small their actions may seem.
  
        Additionally, inspiring others to give fosters a sense of unity and connection within your community. It brings people together around shared values of empathy, kindness, and social responsibility. By working together to support those in need, we strengthen our bonds and build a more resilient and inclusive society. Your efforts to inspire generosity can lead to lasting positive change and create a legacy of compassion that continues to benefit generations to come.
  
        Furthermore, promoting a culture of giving can have far-reaching effects beyond your immediate community. It encourages individuals, businesses, and organizations to prioritize social impact and corporate responsibility. By leading by example and advocating for charitable causes, you influence broader societal norms and encourage systemic change. Together, we can build a brighter and more equitable future for all, driven by the collective power of generosity and compassion.
      `,
  },
  {
    id: 7,
    title: "Protect the Environment",
    description:
      "Donating winter clothes reduces landfill waste and minimizes environmental impact, contributing to a cleaner and healthier planet.",
    icon: "🌍",
    blog: `
        Every year, millions of tons of textile waste end up in landfills, where synthetic fibers can take centuries to decompose. By donating winter clothes, you help reduce the amount of textile waste entering our landfills and minimize the environmental impact of clothing production and disposal. Your actions contribute to a cleaner and healthier environment for future generations to enjoy.
  
        Additionally, donating gently used winter clothes supports sustainable fashion practices by promoting reuse and recycling. It extends the lifecycle of clothing items, reducing the need for new production and conserving valuable natural resources. By choosing to donate instead of discarding clothing, you support the principles of a circular economy where materials are reused, repurposed, and recycled to create new value.
  
        Protecting the environment through clothing donation also helps mitigate climate change by reducing greenhouse gas emissions associated with textile manufacturing. It promotes responsible consumption habits and encourages others to adopt sustainable lifestyle choices. Your decision to donate winter clothes demonstrates a commitment to environmental stewardship and sets an example of conscientious living for others to follow.
      `,
  },
  {
    id: 8,
    title: "Support Economic Stability",
    description:
      "By donating winter clothes, you support economic stability by helping individuals and families allocate resources to other essential expenses.",
    icon: "💼",
    blog: `
        For individuals and families facing financial hardship, the cost of winter clothing can be prohibitive. By donating gently used winter clothes, you alleviate financial burdens and enable recipients to allocate their limited resources to other essential expenses, such as food, housing, and healthcare. Your support promotes economic stability by providing individuals and families with the resources they need to manage their finances effectively.
  
        Additionally, donating winter clothes supports local economies by stimulating demand for goods and services. Charitable organizations and thrift stores that distribute donated clothing often employ staff and rely on volunteers to operate their programs. By supporting these organizations through your donations, you contribute to job creation and economic activity within your community. Your actions help build a more resilient economy where everyone has the opportunity to thrive.
  
        Moreover, supporting economic stability through clothing donation strengthens social safety nets and reduces inequalities. It ensures that individuals and families have access to basic necessities during times of economic hardship, promoting social cohesion and well-being. By investing in the economic security of others, you contribute to a more equitable society where everyone can live with dignity and achieve their full potential.
      `,
  },
  {
    id: 9,
    title: "Encourage Community Bonding",
    description:
      "Donating winter clothes fosters community bonding by bringing people together around a common cause of compassion and social responsibility.",
    icon: "🤝",
    blog: `
        Donating winter clothes is more than a charitable act; it's an opportunity to strengthen community bonds and foster a sense of belonging among residents. When individuals come together to support a shared cause, such as helping those in need, they build connections and create a supportive network of caring neighbors. Your donations inspire others to get involved and make a positive impact in their community, promoting a culture of solidarity and empathy.
  
        Community bonding through clothing donation encourages collaboration among diverse groups and fosters mutual respect and understanding. It transcends differences and unites people around shared values of compassion, generosity, and social responsibility. By working together to address local challenges, community members build trust and cooperation, laying the foundation for a stronger and more cohesive society.
  
        Additionally, donating winter clothes provides opportunities for meaningful engagement and volunteerism within your community. Whether you donate directly to a local charity or participate in a community-wide clothing drive, your involvement fosters a sense of civic pride and collective action. It demonstrates that by coming together, residents can make a meaningful difference in the lives of their neighbors and contribute to a more inclusive and supportive community for all.
  
        Furthermore, community bonding through clothing donation creates ripple effects of kindness and goodwill. It inspires acts of kindness and encourages individuals to look out for one another, building a sense of unity and shared purpose. By nurturing community spirit and social connections, you contribute to a more resilient and compassionate society where everyone feels valued and supported.
      `,
  },
  {
    id: 10,
    title: "Spread Warmth and Kindness",
    description:
      "Your donations spread warmth and kindness, providing hope and encouragement to individuals facing adversity during the winter season.",
    icon: "❤️",
    blog: `
        Winter can be a challenging time for many individuals and families, especially those experiencing homelessness or financial hardship. Your donations of winter clothes spread warmth and kindness, offering hope and encouragement to those facing adversity during the coldest months of the year. By providing essential clothing items, you show compassion and solidarity with those in need, brightening their spirits and reminding them that they are not alone.
  
        Your act of generosity can make a profound difference in someone's life, providing more than just physical warmth. It offers emotional support and reassurance, reminding recipients that their community cares about their well-being. Your donations enable individuals to navigate the winter season with dignity and resilience, empowering them to overcome challenges and pursue opportunities for a brighter future.
  
        Moreover, spreading warmth and kindness through clothing donation creates a ripple effect of positive change in your community. It inspires others to follow your example and contribute to charitable causes, amplifying the impact of individual acts of kindness. Together, we can create a warmer, more compassionate world where everyone has the support and resources they need to thrive.
  
        Your donations of winter clothes not only provide practical assistance but also embody the values of empathy and compassion. They remind us of our shared humanity and the importance of looking out for one another, especially during times of hardship. By spreading warmth and kindness, you help build a more caring and inclusive society where everyone feels valued and respected.
      `,
  },
];

const BenefitsOfDonating: FC = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<any>(null); // State to track which benefit's modal is open
  const { darkMode } = useDarkMode();
  const openModal = (benefit: any) => {
    setSelectedBenefit(benefit);
  };

  const closeModal = () => {
    setSelectedBenefit(null);
  };

  return (
    <Container
      className={cn("py-12 px-6", {
        " bg-gray-100": !darkMode
      })}
    >
      <h2 className="text-4xl font-bold text-center mb-8">
        Benefits of Donating Winter Clothes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <span className="mr-2">{benefit.icon}</span> {benefit.title}
                </CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{benefit.blog.substring(0, 200)}...</p>
                <Button onClick={() => openModal(benefit)}>Learn More</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying full blog */}
      <AnimatePresence>
        {selectedBenefit && (
          <motion.div
            key={selectedBenefit.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-white p-6 rounded-lg max-w-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">
                {selectedBenefit.title}
              </h2>
              <p>{selectedBenefit.blog}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default BenefitsOfDonating;
