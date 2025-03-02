import { NumberTicker } from './NumberTicker';

type props = {
  value: number;
  label: string;
}

const StatTicket = ({ value, label }: props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <NumberTicker value={value} className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"/>
      <p className="text-lg font-normal text-gray-500">{label}</p>
    </div>
  );
}

export default StatTicket;