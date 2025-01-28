class ListsController < ApplicationController
    def index
        @list = List.new
        @lists = List.all
    end
    
    def create
        @lists = List.all
        @list = List.new(list_params)
        if @list.save
            redirect_to lists_path
        else
            render :index
        end
    end
    
    
    private
    
    def list_params
        params.require(:list).permit(:body)
    end
    
    
end
