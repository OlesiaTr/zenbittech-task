import {
  useAppDispatch,
  useAppSelector,
  useEffect,
} from '#libs/hooks/hooks.js';
import { actions as dealsActions } from '#slices/deals/deals.js';

import { DealCard } from './components/deal-card/deal-card.js';
import { Container, DealsContainer, Title } from './deals.styled.js';

const Deals: React.FC = () => {
  const dispatch = useAppDispatch();

  const { dealsData } = useAppSelector(({ deals }) => ({
    dealsData: deals.dealsData,
  }));

  useEffect(() => {
    void dispatch(dealsActions.getAll());
  }, [dispatch]);

  return (
    <Container>
      <Title>Open Deals</Title>
      <DealsContainer>
        {dealsData.map((deal) => (
          <DealCard deal={deal} key={deal.id} />
        ))}
      </DealsContainer>
    </Container>
  );
};

export { Deals };
