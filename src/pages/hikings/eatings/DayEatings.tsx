import { SimpleGrid } from "@chakra-ui/react";

const DayEatings = (dayNumber: string) => {
  return (
    <SimpleGrid columns={5} spacing={10}>
      {dayNumber}
    </SimpleGrid>
  );
};

export default DayEatings;
