/* eslint-disable prettier/prettier */
/* eslint-disable prefer-destructuring */
import { NextPage } from 'next';
import { Box, Heading, Flex, Center } from '@chakra-ui/react';
import { ServiceLayout } from '@/component/service_layout';
import { GoogleLoginButton } from '@/component/google_login_button';
import { useAuth } from '@/contexts/auth_user_context';

const IndexPage: NextPage = function () {
  const {signInWithGoogle, authUser} = useAuth();
  console.info(authUser);
  return (
    <ServiceLayout title="Home" backgroundColor="gray.50" minH="100vh">
      <Box maxW="md" mx="auto">
        <img src="/main_logo.svg" alt="메인 로고" />
        <Flex justify="center">
          <Heading>#BlahBlah</Heading>
        </Flex>
      </Box>
      <Center mt="20">
        <GoogleLoginButton onClick={signInWithGoogle}/>
      </Center>
    </ServiceLayout>
  );
};

export default IndexPage;
