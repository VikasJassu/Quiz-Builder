import React, { useState } from 'react';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import { arrayMove } from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <span className="drag-handle">&#x2630;</span>);

const SortableItem = SortableElement(({ value }) => (
  <div tabIndex={0}>
    <DragHandle /> {/* Drag Handle */}
    {value}
  </div>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

const SortableComponent = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems((prevItems) => arrayMove(prevItems, oldIndex, newIndex));
  };

  return <SortableList items={items} onSortEnd={onSortEnd} useDragHandle />;
};

export default SortableComponent;
