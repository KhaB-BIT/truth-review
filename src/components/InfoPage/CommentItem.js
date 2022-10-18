import {
  Avatar,
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

function CommentIten({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [content, setContent] = useState();
  const handleOpenModal = (url) => {
    setContent(url);
    onOpen();
  };

  return (
    <>
      <Flex my={6}>
        <Avatar src={data.avatar} />
        <Box>
          <Flex>
            <Box ml={3}>
              <Text>{data.user_name}</Text>
              <Text fontSize="sm">⭐⭐⭐⭐⭐</Text>
            </Box>
          </Flex>

          <Text p={3} fontSize="sm">
            {data.comment}
          </Text>
          <Flex overflowX="scroll" pb={1}>
            {data.images.map((item, index) => {
              return (
                <Image
                  ml={3}
                  key={index}
                  src={item}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="5px"
                  cursor="pointer"
                  _hover={{ opacity: 0.8 }}
                  onClick={() => handleOpenModal(item)}
                />
              );
            })}
          </Flex>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="none">
          <ModalCloseButton
            bg="#1edaeb"
            color="white"
            _hover={{ bg: "#2448c0" }}
          />
          <ModalBody p={0}>
            <Image src={content} borderRadius="10px" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CommentIten;
