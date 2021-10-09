declare class Stock {
  create(page: any, containerDiv: Node, itemWidth: number, itemHeight: number): void;

  addItemType(typeId: number, weight: number): void;
  addItemType(typeId: number, weight: number, imageUrl: string, imagePosition: number): void;

  image_items_per_row: number;

  addToStock(typeId: number, from?: string): void;
}
