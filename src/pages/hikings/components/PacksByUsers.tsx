import { oneDayToPacks, packsToUsers } from "@/utils/greedy";
import { IEating } from "../hikingContracts";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex } from "@chakra-ui/react";
import { getArraySum } from "@/utils/common";

interface IPacksByUsers {
  daysTotal: number;
  eatings: IEating[];
  membersTotal: number;
}

const PacksByUsers = ({ daysTotal, eatings, membersTotal }: IPacksByUsers) => {
  const DESC = (a: number, b: number) => b - a;
  const itemsByDays: number[][] = Array.from({ length: daysTotal }, () => []);
  eatings.forEach((el) => {
    el.recipe.ingredients.map((product) => {
      itemsByDays[el.dayNumber - 1].push(product.quantity * membersTotal);
    });
  });

  const packsByDays: Array<number[][]> = itemsByDays.map((day) => oneDayToPacks(day, membersTotal));

  const packsSumByDays: Array<number[]> = packsByDays.map((dayPacks) =>
    dayPacks.map((el) => getArraySum(el)).sort(DESC),
  );

  const usersBags = packsToUsers(packsSumByDays);

  return (
    <Flex direction="column">
      <h2>Packs by Days:</h2>
      <Accordion allowMultiple>
        {itemsByDays.map((day, i) => (
          <AccordionItem key={`accordion-item-${i}`}>
            <AccordionButton>
              <AccordionIcon />
              day {i + 1} == {getArraySum(day)}: {packsSumByDays[i].join(" + ")}
            </AccordionButton>
            <AccordionPanel pb={4}>
              {packsByDays[i].map((pack, i) => (
                <p key={`pack-${i}`}>
                  {getArraySum(pack)}: {pack.join(" + ")}
                </p>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <h2>Packs by Users</h2>
      <ul>
        {usersBags.map((user, i) => (
          <li key={`user-${i}`}>
            {user.join(" + ")} == {getArraySum(user)}
          </li>
        ))}
      </ul>
    </Flex>
  );
};

export default PacksByUsers;
