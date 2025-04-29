import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <HStack>
      <VStack align="start" backgroundColor="white" borderRadius="md" p={4} boxShadow="md">
        <Image src={imageSrc} alt={title} />
        <Heading size="md" color="black">{title}</Heading>
        <Text color="black">{description}</Text>
        <HStack>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Text color="black" textDecoration="underline" cursor="pointer">See more</Text>
          </a>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Card;
