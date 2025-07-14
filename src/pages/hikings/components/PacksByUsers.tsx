import { IProductPack, oneDayToPacks, packsToUsers } from "@/utils/greedy";
import { IEating } from "../hikingContracts";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  UnorderedList,
} from "@chakra-ui/react";
import { getPackSum } from "@/utils/common";
import { CreateExcel } from "@/components";

interface IPacksByUsers {
  daysTotal: number;
  eatings: IEating[];
  membersTotal: number;
}

const PacksByUsers = ({ daysTotal, eatings, membersTotal }: IPacksByUsers) => {
  const itemsByDays: IProductPack[][] = Array.from({ length: daysTotal }, () => []);
  eatings.forEach((el) => {
    el.recipe.ingredients.map((product) => {
      itemsByDays[el.dayNumber - 1].push({ name: product.ingredient.name, value: product.quantity * membersTotal });
    });
  });

  console.log("itemsByDays", itemsByDays);

  const packsByDays: Array<IProductPack[][]> = itemsByDays.map((day) => oneDayToPacks(day, membersTotal));

  console.log("packsByDays", packsByDays);

  const printPack = (pack: IProductPack) => `${pack.name} ${pack.value}`;

  const groupsByDays = packsByDays.map((day, i) =>
    day.map((pack) => ({ day: i + 1, name: pack.map((el) => printPack(el)).join(" + "), value: getPackSum(pack) })),
  );

  console.log("groupsByDays", groupsByDays);

  const usersBags = packsToUsers(groupsByDays);

  console.log("usersBags", usersBags);

  return (
    <>
      <Flex direction="column">
        <h2>Packs by Days</h2>
        <Accordion allowMultiple>
          {groupsByDays.map((day, i) => (
            <AccordionItem key={`accordion-item-${i}`}>
              <AccordionButton>
                <AccordionIcon />
                day {i + 1}: {day.map((el) => el.value).join(" + ")} = {getPackSum(day)}
              </AccordionButton>
              <AccordionPanel pb={4}>
                {day.map((pack, i) => (
                  <p key={`pack-${i}`}>
                    {pack.value}: {pack.name}
                  </p>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
      <Flex direction="column" mt={4}>
        <h2>Packs by Users</h2>
        <UnorderedList ml={4}>
          {usersBags.map((user, i) => (
            <Flex mb={1} gap="4px">
              <li key={`user-${i}`}>
                спортсмен {i + 1}: {user.map((el) => el.value).join(" + ")} == {getPackSum(user)}
              </li>
              <CreateExcel data={user} fileName={`user-${i + 1}-by-days`} size="xs" />
            </Flex>
          ))}
        </UnorderedList>
      </Flex>
    </>
  );
};

export default PacksByUsers;
