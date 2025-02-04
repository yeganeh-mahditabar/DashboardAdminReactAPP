import './Features.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeatureItem(props) {
    return (
        <div className="featureItem">
            <span className="featureTitle">{props.title}</span>
            <div className="featureContainer">
                <span className="featureMoney">${props.price}</span>
                <span className="featureRate">
                    {props.rate}
                    {props.rate < 0 ? (
                        <ArrowDownward className="featureIcon negative" />
                    ) : (
                        <ArrowUpward className="featureIcon" />
                    )}
                </span>
            </div>
            <span className="featureSub">{props.sub}</span>
        </div>
    )
}
