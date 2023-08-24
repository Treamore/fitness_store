import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={293}
    height={408}
    viewBox="0 0 293 408"
    backgroundColor="#b1afaf"
    foregroundColor="#ffffff"
    {...props}>
    <rect x="33" y="10" rx="6" ry="6" width="94" height="24" />
    <rect x="44" y="247" rx="6" ry="6" width="164" height="17" />
    <rect x="44" y="270" rx="6" ry="6" width="151" height="17" />
    <rect x="180" y="301" rx="6" ry="6" width="78" height="19" />
    <rect x="147" y="326" rx="8" ry="8" width="111" height="24" />
    <rect x="54" y="43" rx="10" ry="10" width="190" height="190" />
    <circle cx="64" cy="342" r="21" />
  </ContentLoader>
);

export default Skeleton;
