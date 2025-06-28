import { BigBlueSpinner } from "@/components";
import { hikingApi } from "./hikingApi";
import {
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const HikingsListPage = () => {
  const { data, isLoading } = hikingApi.useGetHikingsListQuery({ page: 1 });

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  return (
    <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {data.map((el) => {
        return (
          <Card maxW="sm" key={el.id}>
            <CardBody>
              <Image
                src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/31507.png"
                alt="Mountains"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.name}</Heading>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  Дней: {el.daysTotal}; Участников: {el.membersTotal}
                </Box>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button as={ReactRouterLink} to={`/hikings/${el.id}`}>
                Открыть
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default HikingsListPage;
