import { MaterialIcons } from "@expo/vector-icons";
import {
  Center,
  Box,
  Heading,
  VStack,
  Input,
  FormControl,
  Icon,
  Button,
  Checkbox,
  HStack,
  WarningOutlineIcon,
  Image,
  Switch,
  Text,
  useColorMode
} from "native-base";

export default function Signin() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center
      height="full"
      _dark={{ bg: "black" }}
      _light={{ bg: "white" }}
    >

      <Image
        size={150}
        source={{ uri: "https://github.com/NetoVilela.png" }}
        alt="Foto do usuário"
        borderRadius={75}
      />

      <VStack width="full" p={5}>
        <Box width="full">
          <Heading
            color="blue.400"
            _dark={{ color: "white" }}
            _light={{ color: "blue.500" }}
          >Entrar</Heading>

          <FormControl isInvalid>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="seuemail@email.com"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={7}
                  ml={2}
                  color="muted.400"
                />
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >Digite um email cadastrado</FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder="Senha"
              type="password"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={7}
                  ml={2}
                  color="muted.400"
                />
              }
            />
          </FormControl>

          <Button mt={7} colorScheme="darkBlue">Entrar</Button>
        </Box>

        <HStack justifyContent="center">
          <Checkbox mt={5} value="agree">Concordo com a política de privacidade</Checkbox>
        </HStack>

        <HStack alignItems="center" space={4} justifyContent="center" mt={3}>
          <Text>Dark</Text>
          <Switch
            isChecked={colorMode === "light"}
            onToggle={toggleColorMode}
            aria-label={
              colorMode === "light" ? "Troque para o tema escuro" : "Troque para o tema claro"
            }
          />
          <Text>Light</Text>
        </HStack>
      </VStack>
    </Center>
  );
}