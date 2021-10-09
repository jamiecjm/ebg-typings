declare interface Ebg {
  stock(): Stock;
  counter(): Counter;
  draggable(): Draggable;
  expandableSection(): ExpandableSection;
  scrollmap(): Scrollmap;
  zone(): Zone;
}

declare const ebg: Ebg;
