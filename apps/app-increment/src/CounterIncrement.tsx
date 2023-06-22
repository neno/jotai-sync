import { Provider, useAtom, useStore } from 'jotai';
import { countAtom, incrementAtom, myStore } from 'mystore';

export function CounterIncrement() {
  const store = useStore();
  const count = myStore.get(countAtom);
  return (
    <section>
      <h2>Increment</h2>
      <button onClick={() => myStore.set(incrementAtom)}>
        Increment: count is {count}
      </button>
    </section>
  );
}
