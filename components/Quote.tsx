import * as React from 'react';
import {Headline} from 'react-native-paper';

interface IQuoteProps {}

const Quote: React.FunctionComponent<IQuoteProps> = ({children}) => {
  return <Headline>{children}</Headline>;
};

export default Quote;
