before_action :item, only: [:update, :destroy]

def index
  render json: Item.all
end

def create
  item = Item.create(item_params)
  render json: item
end

def update
  @item.update(complete: !item.complete)
  render json: item
end

def destroy
  @item.destroy
  render json: { message: 'Item deleted' }
end

private

def item_params
  params.require(:item).permit(:name, :complete)
end

def item
  @item ||= Item.find(params[:id])
end
