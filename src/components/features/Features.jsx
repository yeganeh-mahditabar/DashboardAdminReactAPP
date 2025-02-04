import './Features.css';
import FeatureItem from './FeatureItem';

const data = [
  {
    id: "1",
    title: "Revanue",
    price: "2,415",
    rate: -11.4,
    sub: "Compared to last month"
  },
  {
    id: "2",
    title: "Sales",
    price: "4,415",
    rate: -1.4,
    sub: "Compared to last month"
  },
  {
    id: "3",
    title: "Cost",
    price: "2,225",
    rate: +2.4,
    sub: "Compared to last month"
  }
]

export default function Features() {
  return (
    <div className="features">
      {data.map((item)=> {
        return <FeatureItem key={item.id} {...item} />;
      })}
    </div>
  )
}
