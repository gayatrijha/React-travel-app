import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stat from "./Stat";
import { PackingList } from "./PackingList";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    // console.log(item);
    setItems((items) => [...items, item]);
    // console.log(items, item);
  }
  function handleDeleteItem(Itemid) {
    // console.log(Itemid);
    setItems((item) => items.filter((item) => item.id !== Itemid));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm("do you want to delete all items");
    console.log(confirmed);
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleAddItems={handleAddItems}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClear={handleClear}
      />
      <Stat items={items} />
    </div>
  );
}
