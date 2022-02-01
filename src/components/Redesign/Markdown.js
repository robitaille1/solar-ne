import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Text,
  Heading,
  OrderedList,
  UnorderedList,
  Image,
  Link,
} from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

function getCoreProps(props) {
  return props["data-sourcepos"]
    ? { "data-sourcepos": props["data-sourcepos"] }
    : {};
}

const Markdown = ({ content }) => {
  const theme = {
    p: (props) => {
      const { children } = props;
      return (
        <Text mb={5} color={"gray.500"}>
          {children}
        </Text>
      );
    },
    h2: (props) => {
      const { children } = props;
      return <Heading mb={5}>{children}</Heading>;
    },
    img: (props) => {
      const { src, alt } = props;
      return (
        <Image
          margin={"10px auto"}
          mb={5}
          src={src}
          alt={alt}
          maxW={"50%"}
          maxH={500}
        />
      );
    },
    a: (props) => {
      const { href, children } = props;
      return (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          textDecoration={"underline"}
        >
          {children}
        </Link>
      );
    },
    ul: (props) => {
      const { ordered, children, depth } = props;
      const attrs = getCoreProps(props);
      let Element = UnorderedList;
      let styleType = "disc";
      if (ordered) {
        Element = OrderedList;
        styleType = "decimal";
      }
      if (depth === 1) styleType = "circle";
      return (
        <Element
          color={"gray.500"}
          spacing={2}
          as={ordered ? "ol" : "ul"}
          styleType={styleType}
          pl={4}
          {...attrs}
          mb={5}
        >
          {children}
        </Element>
      );
    },
  };
  return (
    <ReactMarkdown
      components={ChakraUIRenderer(theme)}
      children={content}
      skipHtml
      linkTarget={"_blank"}
    />
  );
};

export default Markdown;
