import React from "react";
import { Card } from "../ui/card";

const AboutUs: React.FC = () => {
  return (
    <section className="about-us-section  py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-6">
          The Distribution of Winter Clothes Management Platform is dedicated to
          ensuring that individuals in need are provided with the warmth and
          comfort they deserve during the cold season. Our mission is to bridge
          the gap between donors and recipients, creating a seamless process for
          distributing winter clothes to those who need them most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card className=" p-2">
            <h3 className="text-2xl font-semibold mb-4">Who Are We</h3>
            <p>
              We are a dedicated team of volunteers and social workers committed
              to making a difference in the lives of those facing harsh winter
              conditions. Our platform connects generous donors with those in
              need, ensuring that everyone has access to essential winter
              clothing.
            </p>
          </Card>
          <Card className=" p-2">
            <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
            <p>
              We collect, manage, and distribute winter clothes through a
              well-organized system. Our platform allows donors to contribute
              winter clothes easily, and recipients to receive these items
              through various distribution points and events. We also provide
              valuable information on how to stay safe and warm during the
              winter.
            </p>
          </Card>
          <Card className=" p-2">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p>
                Our mission is to create a warm and compassionate community
                where no one has to suffer from the cold. We strive to achieve
                this by facilitating the efficient distribution of winter
                clothes and raising awareness about the importance of helping
                those in need.
              </p>
            </div>
          </Card>
          <Card className=" p-2">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
              <p>
                Since our inception, we have distributed thousands of winter
                clothing items to individuals and families in need. Our efforts
                have not only provided physical warmth but also a sense of hope
                and community support. We continuously work to expand our reach
                and help more people each year.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
