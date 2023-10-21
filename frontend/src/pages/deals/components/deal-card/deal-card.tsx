import { type DealEntryGetAllItemResponseDto } from '#packages/deals/deals.js';

import {
  Container,
  Description,
  Image,
  Overlay,
  Title,
} from './deal-card.styled.js';

type Properties = {
  deal: DealEntryGetAllItemResponseDto;
};
const DealCard: React.FC<Properties> = ({ deal }: Properties) => {
  const { img, price, name, sold, ticket, daysLeft } = deal;

  return (
    <Container>
      <Image src={img} alt="deal" width="100%" height="100%" />
      <Overlay>
        <Title>{name}</Title>
        <Description>
          <span>{price}</span>
          <span>{`Yield ${price}`}</span>
          <span>{`Sold ${sold}`}</span>
          <span>{`Ticket ${ticket}`}</span>
          <span>{`Days left ${daysLeft}`}</span>
        </Description>
      </Overlay>
    </Container>
  );
};

export { DealCard };
