import React from "react";
import OrchestrationWrapper from "./orchestration.style";
import { Container } from "../../reusecore/Layout";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.png";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import SelfServiceAndIntegrationsGIF from "./images/self-service-and-integration.gif";
import DeployDesignsGIF from "./images/deploy-designs.gif";
import Validate from "./images/validate.gif";

let data = {
  heading: "Automate Infrastructure with Orchestration Management",
  sub_heading: "Achieve seamless collaboration and operational harmony for enhanced productivity.",
  image: whiteboard_svg
};

let card_data = [
  {
    heading: "Self-service & Integrations",
    subtitle: "Empower DevOps teams with self-service capabilities for effortless infrastructure management. Seamlessly integrate with current tools and workflows for a smooth and efficient experience.",
    image: SelfServiceAndIntegrationsGIF
  },
  {
    heading: "Validate your infra before deployment",
    subtitle: "Infrastructure is rigorously validated pre-deployment to ensure reliability, security, and optimal performance.",
    image: Validate
  },
  {
    heading: "Environment provisioning",
    subtitle: "Automate infrastructure provisioning for efficient, ready-to-deploy designs, eliminating manual work for basic requests in development, QA, testing, and IT operations.",
    image: DeployDesignsGIF
  },

];

const Orchestration = () => {
  return (
    <OrchestrationWrapper>
      <FeatureHero data={data} />

      <Container>
        <div className={"feature-use-container"}>
          <div>
            <h2 className={"use-heading"}> Cloud Infra Provisioning with Speed and Control </h2>
          </div>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} sm={12} md={6} lg={6} />
            ))}
          </div>
        </div>
      </Container>
      <Partners />
      <SeeYou />
    </OrchestrationWrapper>
  );
};

export default Orchestration;