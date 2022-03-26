import goldImg from '../img/Gold.webp';
import silverImg from '../img/Silver.webp';
import copperImg from '../img/Copper.webp';
import currencyFormatting from '../utils/currencyFormatting';

const ShowCurrency = ({ amount }) => {
  const { copper, silver, gold } = currencyFormatting(amount);

  return (
    <div>
      {gold} <img style={{ marginRight: '0.5rem' }} src={goldImg} alt="gold" />
      {silver}{' '}
      <img style={{ marginRight: '0.5rem' }} src={silverImg} alt="silver" />
      {copper} <img src={copperImg} alt="copper" />
    </div>
  );
};

export default ShowCurrency;
