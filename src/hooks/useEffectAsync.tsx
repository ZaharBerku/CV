import { useEffect, DependencyList } from 'react';

const useEffectAsync = (effect: () => void, inputs: DependencyList) => {
  useEffect(() => {
    try {
      effect();
    } catch (err) {
      console.log(err);
    }
  }, inputs);
};

export { useEffectAsync };
