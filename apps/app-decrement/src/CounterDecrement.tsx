import { Provider, useAtom, useStore } from 'jotai';
import { countAtom, decrementAtom, myStore } from 'mystore';

export function CounterDecrement() {
  const store = useStore();
  // store.set(countAtom, 4)

  const count = store.get(countAtom);
  return (
    <section>
      <h2>Decrement</h2>
      <button onClick={() => myStore.set(decrementAtom)}>
        Decrement: myStore count is {myStore.get(countAtom)}
      </button>
    </section>
  );
}
