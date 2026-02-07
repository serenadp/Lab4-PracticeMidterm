import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { SquareFeetToAcres } from './SquareFeetToAcres.jsx';
import { LawnMowing } from './LawnMowing.jsx';
import { AirQuality } from './AirQuality.jsx';
import { YeeHa } from './YeeHa.jsx';
import { Slope } from './Slope.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />

      <SquareFeetToAcres sqft={43560} />
      <SquareFeetToAcres sqft={87120} />
      <SquareFeetToAcres sqft={21780} />

      <LawnMowing width={10} length={10} speed={5} />
      <LawnMowing width={20} length={15} speed={10} />
      <LawnMowing width={5} length={8} speed={2} />

      <AirQuality aqi={25} />
      <AirQuality aqi={75} />
      <AirQuality aqi={125} />
      <AirQuality aqi={175} />
      <AirQuality aqi={250} />
      <AirQuality aqi={350} />

      <YeeHa value={9} />  
      <YeeHa value={14} /> 
      <YeeHa value={21} />  
      <YeeHa value={8} />   

      <Slope x1={0} y1={0} x2={2} y2={2} />
      <Slope x1={1} y1={1} x2={3} y2={5} />
      <Slope x1={0} y1={4} x2={4} y2={0} />



    </View>
  );
}

