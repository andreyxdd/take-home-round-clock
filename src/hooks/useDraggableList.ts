import React from 'react';

function useDraggableList<T>(items: Array<T>, setItems: (newItems: Array<T>) => void) {
  const dragItem = React.useRef<number>();
  const dragOverItem = React.useRef<number>();

  const dragStart = (e: React.DragEvent<HTMLDivElement>, dragIdx: number) => {
    dragItem.current = dragIdx;
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, dragIdx: number) => {
    dragOverItem.current = dragIdx;
  };

  const drop = () => {
    if (
      typeof dragItem.current === 'number'
      && typeof dragOverItem.current === 'number'
      && dragItem.current !== dragOverItem.current
    ) {
      const newTasks = items.filter((val, idx) => idx !== dragItem.current);
      const dragItemContent = items[dragItem.current];
      newTasks.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = undefined;
      dragOverItem.current = undefined;
      setItems(newTasks);
    }
  };

  return { dragStart, dragEnter, drop };
}

export default useDraggableList;
