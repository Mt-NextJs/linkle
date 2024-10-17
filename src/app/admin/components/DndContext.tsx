import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, DndProviderProps } from "react-dnd";
import { DragDropManager } from "dnd-core";

interface Props {
  children: React.ReactNode;
  manager?: DragDropManager;
}

const DndContext: React.FC<Props> = ({ children, manager }) => {
  return (
    <DndProvider backend={HTML5Backend} manager={manager}>
      {children}
    </DndProvider>
  );
};

export default DndContext;
