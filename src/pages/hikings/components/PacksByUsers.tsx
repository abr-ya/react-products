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
import { getArraySum, getPackSum } from "@/utils/common";

interface IPacksByUsers {
  daysTotal: number;
  eatings: IEating[];
  membersTotal: number;
}

const PacksByUsers = ({ daysTotal, eatings, membersTotal }: IPacksByUsers) => {
  const DESC = (a: number, b: number) => b - a;
  const itemsByDays: IProductPack[][] = Array.from({ length: daysTotal }, () => []);
  eatings.forEach((el) => {
    el.recipe.ingredients.map((product) => {
      itemsByDays[el.dayNumber - 1].push({ name: product.ingredient.name, value: product.quantity * membersTotal });
    });
  });

  const packsByDays: Array<IProductPack[][]> = itemsByDays.map((day) => oneDayToPacks(day, membersTotal));

  console.log("packsByDays", packsByDays);

  const packsSumByDays: Array<number[]> = packsByDays.map((dayPacks) =>
    dayPacks.map((el) => getPackSum(el)).sort(DESC),
  );

  const usersBags = packsToUsers(packsSumByDays);

  const printPack = (pack: IProductPack) => `${pack.name} ${pack.value}`;

  return (
    <>
      <Flex direction="column">
        <h2>Packs by Days</h2>
        <Accordion allowMultiple>
          {itemsByDays.map((day, i) => (
            <AccordionItem key={`accordion-item-${i}`}>
              <AccordionButton>
                <AccordionIcon />
                day {i + 1} == {getPackSum(day)}: {packsSumByDays[i].join(" + ")}
              </AccordionButton>
              <AccordionPanel pb={4}>
                {packsByDays[i].map((pack, i) => (
                  <p key={`pack-${i}`}>
                    {getPackSum(pack)}: {pack.map((el) => printPack(el)).join(" + ")}
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
            <li key={`user-${i}`}>
              спортсмен {i + 1}: {user.join(" + ")} == {getArraySum(user)}
            </li>
          ))}
        </UnorderedList>
      </Flex>
    </>
  );
};

export default PacksByUsers;
